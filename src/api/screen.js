var epilogue = require('epilogue');
var ScreenModel = require('../models/screen');

var factory = function(sequelize) {
  var model = ScreenModel(sequelize);

  var resource = epilogue.resource({
    model: model,
    endpoints: [ '/screens', '/screens/:id' ]
  });

  return resource;
}

module.exports = factory;
