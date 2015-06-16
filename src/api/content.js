var memoize = require('memoizee');
var _ = require('lodash');

var getContentModel = require('../models/content');

/**
 * Create and cache Epilogue resource for Content model
 *
 * @param {Epilogue} epilogue - Epilogue instance to use as a REST framework
 * @param {Sequelize} sequelize - Sequelize instance to use as an ORM
 * @returns {Epilogue.Resource} - Created (or cached) resource
 */
var getContentResource = memoize(function(epilogue, sequelize) {
  var Content = getContentModel(sequelize);

  var contentResource = epilogue.resource({
    model: Content,
    endpoints: [ '/contents', '/contents/:id' ]
  });

  return contentResource;
});

module.exports = getContentResource;
