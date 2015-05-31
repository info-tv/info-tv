var epilogue = require('epilogue');
var express = require('express');

var API = function API(app, sequelize) {
  var api = express.Router();

  epilogue.initialize({
    app: api,
    sequelize: sequelize
  });

  app.use('/api', api);

  this.sequelize = sequelize;
}

module.exports = API;
