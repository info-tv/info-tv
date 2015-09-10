var AbstractItem = require('./abstract-item');

/**
 * Callback used to listen status changes
 *
 * @callback listenCallback
 * @param {string} newStatus - new status of condition
 */

/**
 * @module condition-parser
 */
module.exports = {
  /**
   * Parses JSON string or equivalent object representation of condition
   *
   * @param {Object|string} json - JSON to parse
   * @param {number} [changingTime=0] - duration of 'changing to ...' statuses
   * in milliseconds used when change of permanent status can be foreseen
   * @returns {AbstractItem} - root of parsed condition
   * @throws Error - If condition cannot be parsed
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
