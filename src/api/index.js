var Epilogue = require('epilogue');
var express = require('express');
var memoize = require('memoizee');
var _ = require('lodash');
require('./utils');

var getters = [
  require('./content'),
  require('./screen'),
  require('./situation')
];

var getAPI = memoize(function(app, sequelize) {
  api = express.Router();

  var epilogue = new Epilogue.initialize({
    app: app,
    sequelize: sequelize
  });
  // hack: make Epilogue class methods available to just created instance.
  _.extend(epilogue, Epilogue);

  app.use('/api', api);

  _.each(getters, function (getResource) {
    getResource(epilogue, sequelize);
  });

  return api;
});

module.exports = getAPI;
