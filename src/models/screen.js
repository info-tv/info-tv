var epilogue = require('epilogue');

var Screen = function Screen (sequelize) {
  var Model = sequelize.define('Screen', {});

  epilogue.resource({
    model: Model,
    endpoints: [ '/screens', '/screens/:id' ]
  });
}

module.exports = Screen;
