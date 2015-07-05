var AbstractItem = function AbstractItem() {};

AbstractItem.prototype.getStatus = function getStatus() {
  return 'false';
};

AbstractItem.prototype.notify = function notify(changingTime, callback) {
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

AbstractItem.prototype.destroy = function destroy() {};

AbstractItem.prototype._notifyChilds = function _notifyChilds(changingTime, callback) {};

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

module.exports = AbstractItem;
