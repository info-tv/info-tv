var config = require('./config');
var server = require('./src/server');

server(config.server.port, true);
