var memoize = require('memoizee');
var _ = require('lodash');

var getContentModel = require('../models/content');

var getContentResource = memoize(function(epilogue, sequelize) {
  var Content = getContentModel(sequelize);

  var contentResource = epilogue.resource({
    model: Content,
    endpoints: [ '/contents', '/contents/:id' ]
  });

  return contentResource;
});

module.exports = getContentResource;
