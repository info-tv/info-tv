var path = require('path');
var restify = require('restify');
var Router = require('paper-router');

var routes = require('./routes');
var models = require('./models');
var sequelize = models.sequelize;

var server = restify.createServer({});
server.use(restify.queryParser());
server.use(restify.bodyParser());

// create routes for built-in controllers
new Router(
  server,
  path.join(__dirname, '/controllers'),
  routes,
  true
);

server.listen(8080, function () {
  sequelize.sync().then(function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);
  }).catch(function (e) {
    console.log(e);
  });
});
