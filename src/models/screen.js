var epilogue = require('epilogue');

var Screen = function Screen(sequelize) {
  var ScreenModel = sequelize.define('Screen', {});

  epilogue.resource({
    model: ScreenModel,
    endpoints: [ '/screens', '/screens/:id' ]
  });
}

module.exports = Screen;
