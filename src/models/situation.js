var Sequelize = require('sequelize');

/**
 * Create and cache Sequelize model
 *
 * @param {Sequelize} sequelize - Sequelize instance to use as ORM
 * @returns {Sequelize.Model} - Created (or cached) model
 */
var getSituationModel = function getSituationModel(sequelize) {
  if(sequelize.isDefined('Situation')) return sequelize.model('Situation');

  var model = sequelize.define('Situation', {
    condition: {
      type: Sequelize.STRING,
      defaultValue: 'false'
    },
    changingTime: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },
    status: {
      type: Sequelize.VIRTUAL,
      defaultValue: 'false'
    }
  });

  return model;
}

module.exports = getSituationModel;
