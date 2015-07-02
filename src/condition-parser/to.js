var _ = require('lodash');
var AbstractClockItem = require('./abstract-clock-item');

var To = function To (date) {
  AbstractClockItem.apply(this, [date]);
};

To.prototype.notify = function notify(changingTime, callback) {
  var foreseeDate = new Date(this.date.getTime() - changingTime);

  this._notify(this.date, function () {
    if (_.includes(['', 'true', 'changing to false'], this.status)) {
      this.status = 'false';
      callback();
    }
  });
  this._notify(foreseeDate, function () {
    if (_.includes(['', 'true'], this.status)) {
      this.status = 'changing to false';
      callback();
    }
  });
};

module.exports = _.extend(To, AbstractClockItem);
