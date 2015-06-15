var Sequelize = require('sequelize');

var getScreenModel = function getScreenModel(sequelize) {
  if(sequelize.isDefined('Screen')) return sequelize.model('Screen');

  var model = sequelize.define('Screen', {});

  return model;
}

module.exports = getScreenModel;
