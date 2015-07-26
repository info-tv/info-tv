/**
 * Base class of all items in any condition.
 *
 * @param {number} [changingTime=0] - duration of 'changing to ...' statuses in
 * milliseconds used when change of permanent status can be foreseen
 * @constructor
 */
var AbstractItem = function AbstractItem(changingTime) {
  this.changingTime = changingTime || 0;
};

/**
 * Get/parse item of given type from object hash
 *
 * @static
 * @param {Object} params
 * @param {string} [params.path] - path of parent item in object hash; used for
 * locating errors. If absent, an empty path is used for root of object hash.
 * @param {Object} params.childs - rest of object hash
 * @param {string} [params.type] - type of item to get. If absent, there should
 * be an object wrapper for the real item.
 * @param {number} [params.changingTime=0] - duration of 'changing to ...'
 * statuses in milliseconds used when change of permanent status can be foreseen
 * @returns {AbstractItem} - Parsed item
 * @throws {Error} - If type is not supported
 */
AbstractItem.getItem = function getItem(params) {
  var path = params.path || '';
  var type = params.type || '';
  var childs = params.childs;
  var changingTime = params.changingTime || 0;

  // if called without type, childs is wrapper object
  if (type === '') {
    type = Object.keys(childs)[0];
    childs = childs[type];
  }

  var newPath = path + '.' + type;
  if (path === '') newPath = type;

  switch (type) {
    case 'oneOf':
      return new (require('./one-of'))(newPath, childs, changingTime);
    case 'all':
      return new (require('./all'))(newPath, childs, changingTime);
    case 'clock':
      return new (require('./clock'))(newPath, childs.from, childs.to, changingTime);

    case undefined:
      throw new Error('Unsupported element at "' + path + '"');
    default:
      throw new Error('Unsupported element "' + type + '" at "' + path + '"');
  }
};

/**
 * Get current status of the condition
 *
 * @returns {string} - status
 */
AbstractItem.prototype.getStatus = function getStatus() {
  return 'false';
};

/**
 * Listen for status changes
 *
 * @param {listenCallback} callback - called when status has changed
 */
AbstractItem.prototype.listen = function listen(callback) {
  var oldStatus = this.getStatus();

  var self = this;
  this._listenChilds(function () {
    oldStatus = self._callIfStatusHasChanged(oldStatus, callback);
  });
};

/**
 * Destroys all bindings of condition. Used to clear timeouts when condition is
 * not relevant any more.
 */
AbstractItem.prototype.destroy = function destroy() {};

/**
 * Listen all child items for their status changes
 *
 * @param {listenCallback} callback - called when status has changed
 * @protected
 */
AbstractItem.prototype._listenChilds = function _listenChilds(callback) {};

/**
 * Call callback if oldStatus doesn't match to current status.
 *
 * @param oldStatus - old cached status
 * @param {listenCallback} callback - called if oldStatus doesn't match to
 * current status
 * @returns {string} - current status
 * @private
 */
AbstractItem.prototype._callIfStatusHasChanged = function _callIfStatusHasChanged(oldStatus, callback) {
  var newStatus = this.getStatus();

  if (newStatus !== oldStatus) {
    callback(newStatus);
  }

  return newStatus;
};

module.exports = AbstractItem;
