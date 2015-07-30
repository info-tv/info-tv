var Sequelize = require('sequelize');

var getModel = require('./abstract-model');

/**
 * Create and cache Sequelize model
 *
 * @param {Sequelize} sequelize - Sequelize instance to use as ORM
 * @returns {Sequelize.Model} - Created (or cached) model
 */
var getContentModel = function getContentModel(sequelize) {
  return getModel({
    sequelize: sequelize,
    modelName: 'Content',
    attributes: {
      type: {
        type: Sequelize.STRING,
        defaultValue: ''
      }
    }
  }, function addRelations(Content) {
    var Situation = require('./situation')(sequelize);

    Content.belongsToMany(Situation, {
      through: 'ContentsSituations',
      onDelete: 'SET NULL',
      onUpdate: 'CASCADE'
    });
  });
};

module.exports = getContentModel;
