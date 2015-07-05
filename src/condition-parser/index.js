var _ = require('lodash');
var AbstractItem = require('./abstract-item');

var parseCondition = function parseCondition(json) {
  var condition = json;
  if (typeof json !== 'object') {
    condition = JSON.parse(json);
  }

  return AbstractItem.getItem(condition);
};

module.exports = {
  parse: parseCondition
};
