var _ = require('lodash');
var AbstractClockItem = require('./abstract-clock-item');

var From = function From (date) {
  AbstractClockItem.apply(this, [date]);
};

From.prototype.notify = function notify(changingTime, callback) {
  var foreseeDate = new Date(this.date.getTime() - changingTime);

  this._notify(this.date, function () {
    if (_.includes(['', 'false', 'changing to true'], this.status)) {
      this.status = 'true';
      callback();
    }
  });
  this._notify(foreseeDate, function () {
    if (_.includes(['', 'false'], this.status)) {
      this.status = 'changing to true';
      callback();
    }
  });
};

module.exports = _.extend(From, AbstractClockItem);
