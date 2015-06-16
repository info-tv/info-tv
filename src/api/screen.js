var memoize = require('memoizee');

var getScreenModel = require('../models/screen');

/**
 * Create and cache Epilogue resource for Screen model
 *
 * @param {Epilogue} epilogue - Epilogue instance to use as a REST framework
 * @param {Sequelize} sequelize - Sequelize instance to use as an ORM
 * @returns {Epilogue.Resource} - Created (or cached) resource
 */
var getScreenResource = memoize(function(epilogue, sequelize) {
  var Screen = getScreenModel(sequelize);

  var screenResource = epilogue.resource({
    model: Screen,
    endpoints: [ '/screens', '/screens/:id' ]
  });

  return screenResource;
});

module.exports = getScreenResource;
