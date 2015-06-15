var memoize = require('memoizee');

var getScreenModel = require('../models/screen');

var getScreenResource = memoize(function(epilogue, sequelize) {
  var Screen = getScreenModel(sequelize);

  screenResource = epilogue.resource({
    model: Screen,
    endpoints: [ '/screens', '/screens/:id' ]
  });

  return screenResource;
});

module.exports = getScreenResource;
