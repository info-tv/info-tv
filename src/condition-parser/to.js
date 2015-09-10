var _ = require('lodash');
var AbstractClockItem = require('./abstract-clock-item');

/**
 * Clock watch that implements TO approach
 *
 * @param {string|number} date - time to wait for
 * @param {number} [changingTime=0] - duration of 'changing to false' status in
 * milliseconds used when status change from true to false can be foreseen
 * @constructor
 * @extends AbstractClockItem
 */
var To = function To(date, changingTime) {
  AbstractClockItem.apply(this, [date, changingTime]);

  var now = new Date();
  if (this.date <= now) {
    this.status = 'false';
  } else if (this.foreseeDate <= now) {
    this.status = 'changing to false';
  } else {
    this.status = 'true';
  }
};

To.prototype = _.create(AbstractClockItem.prototype, {constructor: To});

/**
 * Watch the clock for the foresee date and the real date.
 *
 * @example
 * var to = new To(Date.now() + 10000, 0);
 * to.listen(callback);
 * // callback is called once after 10 seconds
 * // now to.getStatus() === 'false'
 *
 * @example
 * var to = new To(Date.now() + 10000, 5000);
 * to.listen(callback);
 * // callback is called after 5 seconds
 * // now to.getStatus() === 'changing to false'
 * // callback is called after 10 seconds
 * // now to.getStatus() === 'false'
 *
 * @param {listenCallback} callback - called when status has changed
 */
To.prototype.listen = function listen(callback) {
  var foreseeDate = new Date(this.date.getTime() - this.changingTime);
  var oldStatus = this.status;

  var self = this;
  this._listen(this.date, function () {
    oldStatus = self._changeStatusIf(
      ['', 'true', 'changing to false'],
      'false',
      oldStatus,
      callback
    );
  });
  this._listen(foreseeDate, function () {
    oldStatus = self._changeStatusIf(
      ['', 'true'],
      'changing to false',
      oldStatus,
      callback
    );
  });
};

module.exports = To;
