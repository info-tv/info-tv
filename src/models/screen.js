var Sequelize = require('sequelize');
var getModel = require('./abstract-model');

/**
 * Create and cache Sequelize model
 *
 * @param {Sequelize} sequelize - Sequelize instance to use as ORM
 * @returns {Sequelize.Model} - Created (or cached) model
 */
var getScreenModel = function getScreenModel(sequelize) {
  return getModel({
    sequelize: sequelize,
    modelName: 'Screen',
    attributes: {}
  }, function addRelations(Screen) {
    var Situation = require('./situation')(sequelize);

    Screen.belongsToMany(Situation);
  });
}

module.exports = getScreenModel;
