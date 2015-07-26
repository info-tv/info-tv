var expect = require('chai').expect;
var Sequelize = require('sequelize');
_ = require('lodash');

var $ = require('../_utils');

// files to test
var AbstractClockItem = require('../../src/condition-parser/abstract-clock-item');

describe('condition-parser/abstract-item', function () {
  it('should have right foreseen date', function () {
    var now = Date.now();
    var changingTime = Math.floor(Math.random() * 1000);

    var item = new AbstractClockItem(now, changingTime);

    // expect item.date = now
    expect(item).to.have.property('date')
      .that.eql(new Date(now));

    // expect item.foreseeDate = now - changingTime
    expect(item).to.have.property('foreseeDate')
      .that.eql(new Date(now - changingTime));
  });
});
