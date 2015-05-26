var epilogue = require('epilogue');
var Sequelize = require('sequelize');

var Situation = function Situation (sequelize) {
  var Model = sequelize.define('Situation', {
    condition: Sequelize.STRING
  });

  epilogue.resource({
    model: Model,
    endpoints: [ '/situations', '/situations/:id' ]
  });
}

module.exports = Situation;
