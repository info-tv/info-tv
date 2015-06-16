var Sequelize = require('sequelize');

/**
 * Create and cache Sequelize model
 *
 * @param {Sequelize} sequelize - Sequelize instance to use as ORM
 * @returns {Sequelize.Model} - Created (or cached) model
 */
var getContentModel = function getContentModel(sequelize) {
  if(sequelize.isDefined('Content')) return sequelize.model('Content');

  var model = sequelize.define('Content', {
    type: {
      type: Sequelize.STRING,
      defaultValue: ''
    }
  });

  return model;
}

module.exports = getContentModel;
