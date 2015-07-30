var memoize = require('memoizee');

var getResource = require('./abstract-resource');
var getContentModel = require('../models/content');

/**
 * Create and cache Epilogue resource for Content model
 *
 * @param {Epilogue} epilogue - Epilogue instance to use as a REST framework
 * @param {Sequelize} sequelize - Sequelize instance to use as an ORM
 * @returns {Epilogue.Resource} - Created (or cached) resource
 */
var getContentResource = memoize(function(epilogue, sequelize) {
  return getResource({
    epilogue: epilogue,
    sequelize: sequelize,
    getModel: getContentModel,
    validationRules: {}
  });
});

module.exports = getContentResource;
