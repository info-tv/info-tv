var memoize = require('memoizee');
var validate = require('validate.js');
var getResource = require('./abstract-resource');
var getSituationModel = require('../models/situation');

/**
 * Create and cache Epilogue resource for Situation model
 *
 * @param {Epilogue} epilogue - Epilogue instance to use as a REST framework
 * @param {Sequelize} sequelize - Sequelize instance to use as an ORM
 * @returns {Epilogue.Resource} - Created (or cached) resource
 */
var getSituationResource = memoize(function(epilogue, sequelize) {
  return getResource({
    epilogue: epilogue,
    sequelize: sequelize,
    getModel: getSituationModel,
    validationRules: {
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
    }
  });
});

var parseCondition = function parseCondition(value) {}

getSituationResource.conditionParser = {
  parse: parseCondition
};

module.exports = getSituationResource;
