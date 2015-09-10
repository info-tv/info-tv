var _ = require('lodash');
var validate = require('validate.js');

var AbstractItem = require('./abstract-item');
var From = require('./from');
var To = require('./to');

/**
 * Clock condition item with ability to watch the clock.
 *
 * @param {string} path - path of parent item in object hash; used for locating
 * errors
 * @param {string|number} [from] - start time; if present from <= to
 * @param {string|number} [to] - end time; if present to >= from
 * @param {number} [changingTime=0] - duration of 'changing to ...' statuses in
 * milliseconds used when change of permanent status can be foreseen
 * @throws {Error} - If there is problems with parsing or validating from and to
 * @constructor
 * @extends AbstractItem
 */
var Clock = function Clock(path, from, to, changingTime) {
  AbstractItem.apply(this, [changingTime]);

  if (from) {
    this.from = new From(from, changingTime);
  }

  if (to) {
    this.to = new To(to, changingTime);
  }

  var rules = {
    from: {
      presence: !this.to,
      datetime: {
        latest: this.to ? new Date(to) : null
      }
    },
    to: {
      presence: !this.from,
      datetime: {
        earliest: this.from ? new Date(from) : null
      }
    }
  };

  var errors = validate({from: from, to: to}, rules);

  if (errors) {
    errors = JSON.stringify(errors);
    var error = 'Validation failed at \'' + path + '\': ' + errors;
    throw new Error(error);
  }
};

Clock.prototype = _.create(AbstractItem.prototype, {constructor: Clock});


/**
 * Get pre-calculated status
 *
 * @example
 * from:   false | changing to true | true | true              | true
 * to:     true  | true             | true | changing to false | false
 * result: false | changing to true | true | changing to false | false
 *
 * @return {string} - false, changing to true, changing to false, or true
 */
Clock.prototype.getStatus = function getStatus() {
  var values = ['false', 'changing to true', 'changing to false', 'true'];

  var from = this.from ? this.from.getStatus() : 'true';
  var to = this.to ? this.to.getStatus() : 'true';

  return _.min([from, to], function (status) {
    return _.indexOf(values, status);
  });
};

/**
 * Listen from and to for their status changes
 *
 * @param {listenCallback} callback - called when status has changed
 * @protected
 */
Clock.prototype._listenChilds = function _listenChilds(callback) {
  if (this.from) {
    this.from.listen(callback);
  }

  if (this.to) {
    this.to.listen(callback);
  }
};

module.exports = Clock;
