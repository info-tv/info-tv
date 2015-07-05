var validate = require('validate.js');

var conditionParser = require('./situation').conditionParser;

validate.validators.JSON = function isJSON(value) {
  try {
    JSON.parse(value);
  } catch (e) {
    // syntax: 'is not valid JSON; %{e.name}: %{e.message}'
    // e.g. 'is not valid JSON; SyntaxError: Unexpected end of input'
    return 'is not valid JSON; ' + e.name + ': ' + e.message;
  }
};

validate.validators.condition = function isCondition(value) {
  try {
    conditionParser.parse(value);
  } catch (e) {
    // syntax: 'is not valid Condition; %{e.name}: %{e.message}'
    // e.g. 'is not valid Condition; SyntaxError: Unexpected end of input'
    return 'is not valid Condition; ' + e.name + ': ' + e.message;
  }
};
