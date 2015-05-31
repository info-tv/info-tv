var express = require('express');
var http = require('http');
var Sequelize = require('sequelize');

var API = require('./api');
var models = require('./models');

var Server = function Server(callback) {
  var callbackIsFunction = callback instanceof Function;
  if (!callbackIsFunction) callback = function () {};

  var app = express();
  var sequelize = new Sequelize('db', null, null, {
    dialect: 'sqlite'
  });

  var api = new API(app, sequelize);
  models.init(sequelize);

  sequelize.sync();

  app.use('/screen', express.static(__dirname + '/screen/public'));

  var server = http.createServer(app).listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);

    callback();
  });

  this.app = app;
  this.api = api;
  this.sequelize = sequelize;
}

module.exports = Server;
