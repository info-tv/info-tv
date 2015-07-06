var _ = require('lodash');
var AbstractItem = require('./abstract-item');

/**
 * Base class of clock items
 *
 * @param {string|number} date - timestamp of listened time
 * @constructor
 * @extends AbstractItem
 */
var AbstractClockItem = function AbstractClockItem(date) {
  this.date = new Date(date);
  this.status = '';
  this._timeoutIDs = [];
};


/**
 * Clear all registered timeouts.
 */
AbstractClockItem.prototype.destroy = function destroy() {
  _.each(this._timeoutIDs, function (timeoutID) {
    clearTimeout(timeoutID);
  }, this);
};

/**
 * Get pre-calculated status
 * @returns {string} - false, changing to true, changing to false, or true
 */
AbstractClockItem.prototype.getStatus = function getStatus() {
  return this.status;
};

/**
 * Listen clock for given date.
 *
 * @param {Date} date - date to be watched
 * @param {listenCallback} callback - called when date is reached
 * @protected
 */
AbstractClockItem.prototype._listen = function _listen(date, callback) {
  var duration = date.getTime() - Date.now();

  if (duration < 0) duration = 0;

  var self = this;
  var timeoutID = setTimeout(function () {
    self._clear(timeoutID);

    callback();
  }, duration);
  this._timeoutIDs.push(timeoutID);
};

/**
 * Drop one timeoutID from list
 * @param {number} timeoutID - timeoutID to drop
 * @private
 */
AbstractClockItem.prototype._clear = function _clear(timeoutID) {
  this._timeoutIDs = _.without(this._timeoutIDs, timeoutID);
};

module.exports = _.extend(AbstractClockItem, AbstractItem);
