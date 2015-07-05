/**
 * Create and cache Sequelize model
 *
 * @param {Sequelize} options.sequelize - Sequelize instance to use as ORM
 * @param {string} options.modelName - Name of model
 * @param {object} options.attributes - Attributes of model passed to
 *   sequelize.define
 * @param {object} options.options - Options passed to sequelize.define
 * @param {function(Sequelize.Model)} [callback] - called when model is created
 * @returns {Sequelize.Model} - Created (or cached) model
 */
var getModel = function getModel(options, callback) {
  if (typeof callback !== 'function') callback = function () {};

  if(options.sequelize.isDefined(options.modelName)) {
    return options.sequelize.model(options.modelName);
  }

  var model = options.sequelize.define(
    options.modelName,
    options.attributes,
    options.options
  );

  callback(model);

  return model;
};

module.exports = getModel;
