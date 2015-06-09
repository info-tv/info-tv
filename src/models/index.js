var _ = require('lodash');

var models = [
  require('./content'),
  require('./screen'),
  require('./situation')
];

var factory = function(sequelize) {
  _(models).each(function (model) {
    model(sequelize);
  });
}

module.exports = factory;
