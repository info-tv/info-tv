var Sequelize = require('sequelize');

var factory = function(sequelize) {
  if(sequelize.isDefined('Screen')) return sequelize.Model('Screen');

  var model = sequelize.define('Screen', {});

  return model;
}

module.exports = factory;
