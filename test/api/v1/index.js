var fs = require('fs');
var path = require('path');
_ = require('lodash');

var basename = path.basename(module.filename);

describe('/api/v1', function () {
  var server;
  before(function () {
    server = require('./_server');
  });

  after(function () {
    server.kill();
  });

  // Require .test.js files in this directory and call the exported functions
  fs
    .readdirSync(__dirname)
    .filter(function (file) {
      return /^[^._].+\.test.js$/.test(file) && (file !== basename);
    })
    .forEach(function (file) {
      require('./' + file)();
    });
});
