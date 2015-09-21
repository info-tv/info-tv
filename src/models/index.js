var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');

var basename = path.basename(module.filename);
var config = require(__dirname + '/../../config');

var sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
var db = {};

fs
  .readdirSync(__dirname)
  .filter(function (file) {
    return /^[^._].+\.js$/.test(file) && (file !== basename);
  })
  .forEach(function (file) {
    if (file.slice(-3) === '.js') {
      var model = sequelize['import'](path.join(__dirname, file));
      db[model.name] = model;
    }
  });

Object.keys(db).forEach(function (modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
