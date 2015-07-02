var _ = require('lodash');
var AbstractItem = require('./abstract-item');

var AbstractGroup = function AbstractGroup(path, childs) {
  this.childs = _.map(childs, function (child, index) {
    return AbstractItem.getItem(path + '[' + index + ']', child);
  });
};

AbstractGroup.prototype.getStatus = function getStatus() {
  return 'false';
};

AbstractGroup.prototype._notifyChilds = function _notifyChilds(changingTime, callback) {
  _.each(this.childs, function (child) {
    child.notify(changingTime, callback);
  });
};

AbstractGroup.prototype.destroy = function destroy() {
  _.each(this.childs, function (child) {
    child.destroy();
  });
};

module.exports = _.extend(AbstractGroup, AbstractItem);
