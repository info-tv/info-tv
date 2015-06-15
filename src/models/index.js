var _ = require('lodash');

var getters = {
  Content: require('./content'),
  Screen: require('./screen'),
  Situation: require('./situation')
};

var getModels = function(sequelize) {
  var models = {};

  _.each(getters, function (getModel, name) {
    models[name] = getModel(sequelize);
  });

  return models;
}

module.exports = getModels;
