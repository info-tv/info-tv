var Sequelize = require('sequelize');

var factory = function(sequelize) {
  if(sequelize.isDefined('Situation')) return sequelize.Model('Situation');

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

module.exports = factory;
