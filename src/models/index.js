var _ = require('lodash');

var paths = {
  Content:   './content',
  Screen:    './screen',
  Situation: './situation'
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

  _.each(paths, function (path, name) {
    models[name] = require(path)(sequelize);
  });

  return models;
}

module.exports = getModels;
