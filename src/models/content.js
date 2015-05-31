var epilogue = require('epilogue');
var Sequelize = require('sequelize');

var Content = function Content(sequelize) {
  var ContentModel = sequelize.define('Content', {
    type: Sequelize.STRING
  });

  var contentResource = epilogue.resource({
    model: ContentModel,
    endpoints: [ '/contents', '/contents/:id' ]
  });
}

module.exports = Content;
