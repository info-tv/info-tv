var path = require('path');
var Router = require('paper-router');

var routes = require('./routes');
var models = require('./models');

/**
 * Create API to given server
 *
 * @param {Server} server
 * @returns {Router} paper-router instance
 */
module.exports = function (server) {
  return new Router(
    server,
    path.join(__dirname, '/controllers'),
    routes,
    true
  );
};
