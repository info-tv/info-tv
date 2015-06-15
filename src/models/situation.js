var Sequelize = require('sequelize');

var getSituationModel = function getSituationModel(sequelize) {
  if(sequelize.isDefined('Situation')) return sequelize.model('Situation');

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

module.exports = getSituationModel;
