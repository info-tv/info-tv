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
   * @returns {AbstractItem} - root of parsed condition
   */
  parse: function parseCondition(json) {
    var condition = json;
    if (typeof json !== 'object') {
      condition = JSON.parse(json);
    }

    return AbstractItem.getItem(condition);
  }
};
