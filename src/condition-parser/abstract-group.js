var _ = require('lodash');
var AbstractItem = require('./abstract-item');

/**
 * Base class of all item groups
 *
 * @param {string} path - path of parent item in object hash; used for locating
 * errors.
 * @param {Object} childs - rest of object hash
 * @throws {Error} - If there is a problem with parsing childs
 * @constructor
 * @extends AbstractItem
 */
var AbstractGroup = function AbstractGroup(path, childs) {
  this.childs = _.map(childs, function (child, index) {
    return AbstractItem.getItem(path + '[' + index + ']', child);
  });
};

/**
 * Destroys bindings of all childs. Used to clear timeouts when condition is
 * not relevant any more.
 */
AbstractGroup.prototype.destroy = function destroy() {
  _.each(this.childs, function (child) {
    child.destroy();
  });
};

/**
 * Listen all child items for their status changes
 *
 * @param {number} changingTime - duration of 'changing to ...' statuses in
 * milliseconds used when change of permanent status can be foreseen
 * @param {listenCallback} callback - called when status has changed
 * @protected
 */
AbstractGroup.prototype._listenChilds = function _listenChilds(changingTime, callback) {
  _.each(this.childs, function (child) {
    child.listen(changingTime, callback);
  });
};

module.exports = _.extend(AbstractGroup, AbstractItem);
