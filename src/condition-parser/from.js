var _ = require('lodash');
var AbstractClockItem = require('./abstract-clock-item');

/**
 * Clock watch that implements FROM approach
 *
 * @param {string|number} date - time to wait for
 * @param {number} [changingTime=0] - duration of 'changing to ...' statuses in
 * milliseconds used when change of permanent status can be foreseen
 * @constructor
 * @extends AbstractClockItem
 */
var From = function From (date, changingTime) {
  AbstractClockItem.apply(this, [date, changingTime]);
};

From.prototype = _.create(AbstractClockItem.prototype, { constructor: From });

/**
 * Watch the clock for the foresee date and the real date.
 *
 * @example
 * var from = new From(Date.now() + 10000, 0);
 * from.listen(callback);
 * // callback is called once after 10 seconds
 * // now from.getStatus() === 'true'
 *
 * @example
 * var from = new From(Date.now() + 10000, 5000);
 * from.listen(callback);
 * // callback is called after 5 seconds
 * // now from.getStatus() === 'changing to true'
 * // callback is called after 10 seconds
 * // now from.getStatus() === 'true'
 *
 * @param {listenCallback} callback - called when status has changed
 */
From.prototype.listen = function listen(callback) {
  var foreseeDate = new Date(this.date.getTime() - this.changingTime);
  var oldStatus = this.status;

  var self = this;
  this._listen(this.date, function () {
    oldStatus = self._changeStatusIf(
      ['', 'false', 'changing to true'],
      'true',
      oldStatus,
      callback
    );
  });
  this._listen(foreseeDate, function () {
    oldStatus = self._changeStatusIf(
      ['', 'false'],
      'changing to true',
      oldStatus,
      callback
    );
  });
};

module.exports = From;
