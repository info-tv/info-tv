var _ = require('lodash');
var AbstractClockItem = require('./abstract-clock-item');

/**
 * Clock watch that implements FROM approach
 *
 * @param {string|number} date - timestamp of listened time
 * @constructor
 * @extends AbstractClockItem
 */
var From = function From (date) {
  AbstractClockItem.apply(this, [date]);
};

/**
 * Watch the clock for the foresee date and the real date.
 *
 * @param {number} changingTime - duration of 'changing to ...' statuses in
 * milliseconds used when change of permanent status can be foreseen
 * @param {listenCallback} callback - called when status has changed
 * @protected
 */
From.prototype.listen = function listen(changingTime, callback) {
  var foreseeDate = new Date(this.date.getTime() - changingTime);

  this._listen(this.date, function () {
    if (_.includes(['', 'false', 'changing to true'], this.status)) {
      this.status = 'true';
      callback();
    }
  });
  this._listen(foreseeDate, function () {
    if (_.includes(['', 'false'], this.status)) {
      this.status = 'changing to true';
      callback();
    }
  });
};

module.exports = _.extend(From, AbstractClockItem);
