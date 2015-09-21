var path = require('path');
var restify = require('restify');

var api = require('./api');
var sequelize = require('./models').sequelize;

/**
 * Create and start server
 *
 * @param {Number} port server port
 * @param {boolean} log enable/disable logging
 */
module.exports = function (port, log) {
  var server = restify.createServer({});
  server.use(restify.queryParser());
  server.use(restify.bodyParser());

  // create api
  api(server);

  server.listen(port, function () {
    sequelize.sync().then(function () {
      if (log) {
        var host = server.address().address;
        var port = server.address().port;

        console.log('Server listening at http://%s:%s', host, port);
      }
    }).catch(function (e) {
      if (log) {
        console.log(e);
      }
    });
  });

  return server;
};
