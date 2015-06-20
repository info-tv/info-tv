var _ = require('lodash');

/**
 * Create Epilogue resource for Screen model
 *
 * @param {Epilogue} options.epilogue - Epilogue instance to use as a REST
 *   framework
 * @param {Sequelize} options.sequelize - Sequelize instance to use as an ORM
 * @param {function(Sequelize) -> Sequelize.Model} options.getModel - function
 * that returns sequelize model
 * @param {object} options.validationRules -
 * @returns {Epilogue.Resource} - Created resource
 */
var getResource = function(options) {
  var Model = options.getModel(options.sequelize);

  var name = Model.name.toLowerCase();
  var resource = options.epilogue.resource({
    model: Model,
    endpoints: [
      '/' + name + 's',
      '/' + name + 's/:id'
    ]
  });

  var validator = validateResource.bind(null, options.validationRules);
  resource.use({
    create: { write: { before: validator } },
    update: { write: { before: validator } }
  });

  return resource;
};

/**
 * Validate resource when trying to create of update resource from public REST
 * API. This function is called by Epilogue as hook.
 *
 * @param {object} rules - Validation rules
 * @param {Request} req - Request object from Node.js
 * @param {Response} res - Response object from Node.js
 * @param {Object} context - Epilogue context object
 * @returns {function|Error} - If resource is invalid, an Error is returned.
 *   Otherwise context.continue function is returned.
 */
var validateResource = function validateResource(rules, req, res, context) {
  var instanceValues = context.instance ? context.instance.dataValues : [];
  var values = _.merge({}, instanceValues, req.body);

  var errors = validate(values, rules);
  if (errors) {
    return context.error('Validation failed', errors);
  }

  return context.continue;
};

module.exports = getResource;
