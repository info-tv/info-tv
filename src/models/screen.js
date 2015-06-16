var Sequelize = require('sequelize');

/**
 * Create and cache Sequelize model
 *
 * @param {Sequelize} sequelize - Sequelize instance to use as ORM
 * @returns {Sequelize.Model} - Created (or cached) model
 */
var getScreenModel = function getScreenModel(sequelize) {
  if(sequelize.isDefined('Screen')) return sequelize.model('Screen');

  var model = sequelize.define('Screen', {});

  return model;
}

module.exports = getScreenModel;
