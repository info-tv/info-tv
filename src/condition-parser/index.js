var _ = require('lodash');
var AbstractItem = require('./abstract-item');

/**
 * Callback used to listen status changes
 *
 * @callback listenCallback
 * @param {string} newStatus - new status of condition
 */

module.exports = {
  /**
   * Parses JSON string or object representation
   *
   * @param {Object|string} json - JSON to parse
   * @param {number} [changingTime=0] - duration of 'changing to ...' statuses
   * in milliseconds used when change of permanent status can be foreseen
   * @returns {AbstractItem} - root of parsed condition
   */
  parse: function parseCondition(json, changingTime) {
    var condition = json;
    if (typeof json !== 'object') {
      condition = JSON.parse(json);
    }

    return AbstractItem.getItem({
      childs: condition,
      changingTime: changingTime
    });
  }
};
