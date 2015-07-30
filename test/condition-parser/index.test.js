var expect = require('chai').expect;
var Sequelize = require('sequelize');
_ = require('lodash');

var $ = require('../_utils');

var chai = require('chai');
chai.use(require('chai-spies'));

// files to test
var ConditionParser = require('../../src/condition-parser');

// other needed files
var AbstractItem = require('../../src/condition-parser/abstract-item');

describe('condition-parser', function () {
  it('should be able to parse valid condition', function () {
    expect(function () {
      var changingTime = Math.floor(Math.random() * 1000);

      var object = ConditionParser.parse({ all: {} }, changingTime);
      var string = ConditionParser.parse('{"all":{}}', changingTime);

      expect(object).to.be.an.instanceof(AbstractItem)
        .with.property('changingTime', changingTime);

      expect(string).to.be.an.instanceof(AbstractItem)
        .with.property('changingTime', changingTime);
    }).to.not.throw();
  });

  it('should not be able to get invalid items', function () {
    expect(function () {
      ConditionParser.parse();
    }).to.throw();

    expect(function () {
      ConditionParser.parse('invalid condition');
    }).to.throw();

    expect(function () {
      ConditionParser.parse({ invalidCondition: {} });
    }).to.throw();
  });

  it('should pass right path to invalid item', function () {
    expect(function () {
      AbstractItem.getItem({
        childs: { all: [ { oneOf: [ { clock: {} } ] } ] }
      });
    }).to.throw('all[0].oneOf[0].clock');
  });
});