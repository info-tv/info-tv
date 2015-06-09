var epilogue = require('epilogue');
var express = require('express');
var _ = require('lodash');
require('./utils');

var resources = [
  require('./content'),
  require('./screen'),
  require('./situation')
];

var api = null;

var factory = function(app, sequelize) {
  if (api !== null) return api;

  api = express.Router();

  epilogue.initialize({
    app: api,
    sequelize: sequelize
  });

  app.use('/api', api);

  _.each(resources, function (resource) {
    resource(sequelize);
  });

  return api;
}

module.exports = factory;
