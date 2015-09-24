var child_process = require('child_process');

var server = child_process.fork('.', [], {
  silent: true
});

module.exports = server;
