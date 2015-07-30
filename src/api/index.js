var Epilogue = require('epilogue');
var express = require('express');
var memoize = require('memoizee');
var _ = require('lodash');

require('./utils');

var paths = [
  './content',
  './screen',
  './situation'
];

/**
 * Create and cache Express router for API with all Epilogue resources. Load
 * Epilogue resources from other files in this directory.
 *
 * @param {Express} app - Express application to use
 * @param {Sequelize} sequelize - Sequelize instance to use as an ORM
 * @returns {Express.Router} - Created (or cached) API router
 */
var getAPI = memoize(function(app, sequelize) {
  var api = express.Router();

  var epilogue = new Epilogue.initialize({
    app: api,
    sequelize: sequelize
  });
  // hack: make Epilogue class methods available to just created instance.
  _.extend(epilogue, Epilogue);

  app.use('/api', api);

  _.each(paths, function (path) {
    require(path)(epilogue, sequelize);
  });

  return api;
});

module.exports = getAPI;
