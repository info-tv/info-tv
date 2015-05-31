var Content = require('./content');
var Screen = require('./screen');
var Situation = require('./situation');

var init = function init(sequelize) {
  new Content(sequelize);
  new Screen(sequelize);
  new Situation(sequelize);
}

module.exports = {
  init: init
}
