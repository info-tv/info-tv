var epilogue = require('epilogue');
var Sequelize = require('sequelize');

var Situation = function Situation(sequelize) {
  var SituationModel = sequelize.define('Situation', {
    condition: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        isJSON: function (value) {
          try {
            JSON.parse(value);
          } catch(e) {
            throw new SyntaxError('Invalid JSON syntax');
          }
        }
      }
    },
    changingTime: {
      type: Sequelize.INTEGER,
      defaultValue: 0,
      validate: { min: 0 }
    },
    status: {
      type: Sequelize.VIRTUAL,
      defaultValue: 'false',
      allowNull: true,
      validate: {
        isIn: [[ 'true', 'false', 'changing to true', 'changing to false' ]]
      }
    }
  }, {
    instanceMethods: {
      parseCondition: function parseCondition(error) {}
    }
  });

  var situationResource = epilogue.resource({
    model: SituationModel,
    endpoints: [ '/situations', '/situations/:id' ]
  });
}

module.exports = Situation;
