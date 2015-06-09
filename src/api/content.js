var epilogue = require('epilogue');
var ContentModel = require('../models/content');

var factory = function(sequelize) {
  var model = ContentModel(sequelize);

  var resource = epilogue.resource({
    model: model,
    endpoints: [ '/contents', '/contents/:id' ]
  });

  return resource;
}

module.exports = factory;
