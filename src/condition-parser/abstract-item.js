/**
 * Super class of all items in any condition.
 * @constructor
 */
var AbstractItem = function AbstractItem() {};

/**
 * Get/parse item of given type from object hash
 *
 * @static
 * @param {string} [path] - path of parent item in object hash; used for
 * locating errors. If absent, an empty path is used for root of object hash.
 * @param {Object} childs - rest of object hash
 * @param {string} [type] - type of item to get. If absent, there should be an
 * object wrapper for the real item.
 * @returns {AbstractItem} - Parsed item
 * @throws {Error} - If type is not supported
 */
AbstractItem.getItem = function getItem(path, childs, type) {
  // check if called without path
  if (typeof path !== 'string') {
    type = childs;
    childs = path;
    path = '';
  }

  // check if called without type
  if (typeof childs === 'object' && typeof type === 'undefined') {
    type = Object.keys(childs)[0];
    childs = childs[type];
  }

  var newPath = path + '.' + type;
  if (path === '') newPath = type;

  switch (type) {
    case 'oneOf':
      return new (require('./one-of'))(newPath, childs);
    case 'all':
      return new (require('./all'))(newPath, childs);
    case 'clock':
      return new (require('./clock'))(newPath, childs.from, childs.to);
  }

  if (typeof type === 'undefined') {
    throw new Error('Unsupported element at \'' + path + '\'');
  } else {
    throw new Error('Unsupported element \'' + type + '\' at \'' + path + '\'');
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
 * @param {number} changingTime - duration of 'changing to ...' statuses in
 * milliseconds used when change of permanent status can be foreseen
 * @param {listenCallback} callback - called when status has changed
 */
AbstractItem.prototype.listen = function listen(changingTime, callback) {
  var oldStatus = this.getStatus();

  var self = this;
  var changed = function changed() {
    var newStatus = self.getStatus();

    if (newStatus !== oldStatus) {
      oldStatus = newStatus;
      callback(newStatus);
    }
  };

  this._notifyChilds(changingTime, changed);
};

/**
 * Destroys all bindings of condition. Used to clear timeouts when condition is
 * not relevant any more.
 */
AbstractItem.prototype.destroy = function destroy() {};

/**
 * Listen all child items for their status changes
 *
 * @param {number} changingTime - duration of 'changing to ...' statuses in
 * milliseconds used when change of permanent status can be foreseen
 * @param {listenCallback} callback - called when status has changed
 * @protected
 */
AbstractItem.prototype._listenChilds = function _listenChilds(changingTime, callback) {};

module.exports = AbstractItem;
