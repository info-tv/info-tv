var bodyParser = require('body-parser');
var express = require('express');
var http = require('http');
var Sequelize = require('sequelize');

var api = require('./api');
var models = require('./models');

/**
 * Create and start HTTP server with express application to port 3000.
 *
 * @param {function()} [callback] - Callback function called when server is
 *                                  running.
 */
var createServer = function createServer(callback) {
  if (typeof callback !== 'function') callback = function () {};

  // init express application
  var app = express();
  app.use(bodyParser.json());

  // init sequelize
  var sequelize = new Sequelize('db', null, null, {
    dialect: 'sqlite',
    storage: '../db.sqlite'
  });

  // init api and models
  api(app, sequelize);
  models(sequelize);

  // sync database
  sequelize.sync();

  // load static folders
  app.use('/screen', express.static(__dirname + '/screen/public'));

  // start server
  var server = http.createServer(app).listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);

    callback();
  });

  return server;
}

module.exports = createServer;
