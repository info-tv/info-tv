var Sequelize = require('sequelize');

var factory = function(sequelize) {
  if(sequelize.isDefined('Content')) return sequelize.Model('Content');

  var model = sequelize.define('Content', {
    type: {
      type: Sequelize.STRING,
      defaultValue: ''
    }
  });

  return model;
}

module.exports = factory;
