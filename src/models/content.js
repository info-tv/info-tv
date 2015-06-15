var Sequelize = require('sequelize');

var getContentModel = function getContentModel(sequelize) {
  if(sequelize.isDefined('Content')) return sequelize.model('Content');

  var model = sequelize.define('Content', {
    type: {
      type: Sequelize.STRING,
      defaultValue: ''
    }
  });

  return model;
}

module.exports = getContentModel;
