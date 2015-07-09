var _ = require('lodash');
var AbstractItem = require('./abstract-item');

/**
 * Base class of clock items
 *
 * @param {string|number} date - time to wait for
 * @param {number} [changingTime=0] - duration of 'changing to ...' statuses in
 * milliseconds used when change of permanent status can be foreseen
 * @constructor
 * @extends AbstractItem
 */
var AbstractClockItem = function AbstractClockItem(date, changingTime) {
  AbstractItem.apply(this, [changingTime]);

  this.date = new Date(date);
  this.status = '';
  this._timeoutIDs = [];
};

AbstractClockItem.prototype = _.create(AbstractItem.prototype, {
  constructor: AbstractClockItem
});

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
 *
 * @returns {string} - false, changing to true, changing to false, or true
 */
AbstractClockItem.prototype.getStatus = function getStatus() {
  return this.status;
};

/**
 * Changes status to newStatus if previous status is listed in allowedStatuses
 * and call callback if oldStatus doesn't match to current/updated status.
 *
 * @param {string[]} allowedStatuses - list of previous statuses that are
 * allowed to change
 * @param newStatus - new status if previous status is listen in allowedStatuses
 * @param oldStatus - old cached status
 * @param {listenCallback} callback - called if oldStatus does not match to
 * updated status
 * @returns {string} - current/updated status
 * @protected
 */
AbstractClockItem.prototype._changeStatusIf = function _changeStatusIf(allowedStatuses, newStatus, oldStatus, callback) {
  if (_.includes(allowedStatuses, this.status)) {
    this.status = newStatus;
  }

  if (this.status !== oldStatus) {
    callback();
  }

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
 *
 * @param {number} timeoutID - timeoutID to drop
 * @private
 */
AbstractClockItem.prototype._clear = function _clear(timeoutID) {
  this._timeoutIDs = _.without(this._timeoutIDs, timeoutID);
};

module.exports = AbstractClockItem;
