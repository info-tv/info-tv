var epilogue = require('epilogue');
var validate = require('validate.js');
var _ = require('lodash');
var SituationModel = require('../models/situation');

var factory = function(sequelize) {
  var model = SituationModel(sequelize);

  var resource = epilogue.resource({
    model: model,
    endpoints: [ '/situations', '/situations/:id' ]
  });

  resource.use({
    create: { write: { before: validateResource } },
    update: { write: { before: validateResource } }
  });

  return resource;
}

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

factory.conditionParser = {
  parse: parseCondition
};

module.exports = factory;
