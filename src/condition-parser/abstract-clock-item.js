var _ = require('lodash');
var AbstractItem = require('./abstract-item');

var AbstractClockItem = function AbstractClockItem(date) {
  this.date = new Date(date);
  this.status = '';
  this._timeoutIDs = [];
};

AbstractClockItem.prototype.getStatus = function getStatus() {
  return this.status;
};

AbstractClockItem.prototype._notify = function _notify(date, callback) {
  var duration = date.getTime() - Date.now();

  if (duration < 0) duration = 0;

  var self = this;
  var timeoutID = setTimeout(function () {
    self._clear(timeoutID);

    callback();
  }, duration);
  this._timeoutIDs.push(timeoutID);
};

AbstractClockItem.prototype._clear = function _clear(timeoutID) {
  this._timeoutIDs = _.without(this._timeoutIDs, timeoutID);
};

AbstractClockItem.prototype.destroy = function destroy() {
  _.each(this._timeoutIDs, function (timeoutID) {
    clearTimeout(timeoutID);
  }, this);
};

module.exports = _.extend(AbstractClockItem, AbstractItem);
