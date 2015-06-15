var memoize = require('memoizee');
var validate = require('validate.js');
var _ = require('lodash');

var getSituationModel = require('../models/situation');

var getSituationResource = memoize(function(epilogue, sequelize) {
  var Situation = getSituationModel(sequelize);

  situationResource = epilogue.resource({
    model: Situation,
    endpoints: [ '/situations', '/situations/:id' ]
  });

  situationResource.use({
    create: { write: { before: validateResource } },
    update: { write: { before: validateResource } }
  });

  return situationResource;
});

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

var validateResource = function validateResource(req, res, context) {
  var instanceValues = context.instance ? context.instance.dataValues : [];
  var values = _.merge({}, instanceValues, req.body);

  var errors = validate(values, validationRules);
  if (errors) {
    context.error('Validation failed', errors);
  }

  return context.continue;
}

var parseCondition = function parseCondition(value) {}

getSituationResource.conditionParser = {
  parse: parseCondition
};

module.exports = getSituationResource;
