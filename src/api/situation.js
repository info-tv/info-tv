var memoize = require('memoizee');
var validate = require('validate.js');
var _ = require('lodash');

var getSituationModel = require('../models/situation');

/**
 * Create and cache Epilogue resource for Situation model
 *
 * @param {Epilogue} epilogue - Epilogue instance to use as a REST framework
 * @param {Sequelize} sequelize - Sequelize instance to use as an ORM
 * @returns {Epilogue.Resource} - Created (or cached) resource
 */
var getSituationResource = memoize(function(epilogue, sequelize) {
  var Situation = getSituationModel(sequelize);

  var situationResource = epilogue.resource({
    model: Situation,
    endpoints: [ '/situations', '/situations/:id' ]
  });

  situationResource.use({
    create: { write: { before: validateResource } },
    update: { write: { before: validateResource } }
  });

  return situationResource;
});

/**
 * Validation rules of resource when trying to change it from public REST API
 */
var validationRules = {
  condition: {
    presence: true,
    JSON: true,
    condition: true
  },
  changingTime: {
    numericality: {
      onlyInteger: true,
      greaterThanOrEqualTo: 0
    }
  }
};

/**
 * Validate resource when trying to create of update resource from public REST
 * API. This function is called by Epilogue as hook.
 *
 * @param {Request} req - Request object from Node.js
 * @param {Response} res - Response object from Node.js
 * @param {Object} context - Epilogue context object
 * @returns {function|Error} - If resource is invalid, an Error is returned.
 *                             Otherwise context.continue function is returned.
 */
var validateResource = function validateResource(req, res, context) {
  var instanceValues = context.instance ? context.instance.dataValues : [];
  var values = _.merge({}, instanceValues, req.body);

  var errors = validate(values, validationRules);
  if (errors) {
    return context.error('Validation failed', errors);
  }

  return context.continue;
}

var parseCondition = function parseCondition(value) {}

getSituationResource.conditionParser = {
  parse: parseCondition
};

module.exports = getSituationResource;
