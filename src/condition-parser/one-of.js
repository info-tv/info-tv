var _ = require('lodash');
var AbstractGroup = require('./abstract-group');

/**
 * Item group that implements OR approach.
 *
 * @param {string} path - path of parent item in object hash; used for locating
 * errors.
 * @param {Object} childs - rest of object hash
 * @param {number} [changingTime=0] - duration of 'changing to ...' statuses in
 * milliseconds used when change of permanent status can be foreseen
 * @throws {Error} - If there is a problem with parsing childs
 * @constructor
 * @extends AbstractGroup
 */
var OneOf = function (path, childs, changingTime) {
  AbstractGroup.apply(this, [path, childs, changingTime]);
};

OneOf.prototype = _.create(AbstractGroup.prototype, {constructor: OneOf});

/**
 * Get highest status of childs. Meaning of statuses are:
 *
 * 1. false (lowest)
 * 2. changing to true; currently false
 * 3. changing to false; currently true
 * 4. true (highest)
 *
 * @return {string} - false, changing to true, changing to false, or true
 */
OneOf.prototype.getStatus = function getStatus() {
  var values = ['false', 'changing to true', 'changing to false', 'true'];

  var child = _.max(this.childs, function (child) {
    return _.indexOf(values, child.getStatus());
  });

  return typeof child !== 'number' ? child.getStatus() : '';
};

module.exports = OneOf;
