/**
 * Create and cache Sequelize model
 *
 * @param {Sequelize} options.sequelize - Sequelize instance to use as ORM
 * @param {string} options.modelName - Name of model
 * @param {object} options.attributes - Attributes of model passed to
 *   sequelize.define
 * @param {object} options.options - Options passed to sequelize.define
 * @returns {Sequelize.Model} - Created (or cached) model
 */
var getModel = function getModel(options) {
  if(options.sequelize.isDefined(options.modelName)) {
    return options.sequelize.model(options.modelName);
  }

  var model = options.sequelize.define(
    options.modelName,
    options.attributes,
    options.options
  );

  return model;
}

module.exports = getModel;
