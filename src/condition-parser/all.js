var _ = require('lodash');
var AbstractGroup = require('./abstract-group');

/**
 * Item group that implements AND approach.
 *
 * @param {string} path - path of parent item in object hash; used for locating
 * errors.
 * @param {Object} childs - rest of object hash
 * @throws {Error} - If there is a problem with parsing childs
 * @constructor
 * @extends AbstractGroup
 */
var All = function (path, childs) {
  AbstractGroup.apply(this, [path, childs]);
};

/**
 * Get lowest status of childs. Meaning of statuses are:
 *
 * 1. false (lowest)
 * 2. changing to true; currently false
 * 3. changing to false; currently true
 * 4. true (highest)
 *
 * @return {string} - false, changing to true, changing to false, or true
 */
All.prototype.getStatus = function getStatus() {
  var values = [ 'false', 'changing to true', 'changing to false', 'true' ];

  var value = _.min(this.childs, function (child) {
    return _.indexOf(values, child.getStatus());
  });

  return value !== -1 ? values[value] : '';
};

module.exports = _.extend(All, AbstractGroup);
