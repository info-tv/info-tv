var Sequelize = require('sequelize');
var getModel = require('./abstract-model');

/**
 * Create and cache Sequelize model
 *
 * @param {Sequelize} sequelize - Sequelize instance to use as ORM
 * @returns {Sequelize.Model} - Created (or cached) model
 */
var getSituationModel = function getSituationModel(sequelize) {
return getModel({
  sequelize: sequelize,
  modelName: 'Situation',
  attributes: {
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
    }
  });
}

module.exports = getSituationModel;
