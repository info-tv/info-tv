var _ = require('lodash');

var getters = {
  Content: require('./content'),
  Screen: require('./screen'),
  Situation: require('./situation')
};

/**
 * Load and cache Sequelize models. Load them from other files in this
 * directory.
 *
 * @example
 * var ContentModel = getModels().Content;
 *
 * @param {Sequelize} sequelize - Sequelize instance to use as ORM
 * @returns {Object} - Object containing created (or cached) models with their
 *                     names.
 */
var getModels = function(sequelize) {
  var models = {};

  _.each(getters, function (getModel, name) {
    models[name] = getModel(sequelize);
  });

  return models;
}

module.exports = getModels;
