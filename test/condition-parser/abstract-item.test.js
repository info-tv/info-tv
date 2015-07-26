var expect = require('chai').expect;
var Sequelize = require('sequelize');
_ = require('lodash');

var $ = require('../_utils');

var validate = require('validate.js');
validate.moment = require('moment');

// files to test
var AbstractItem = require('../../src/condition-parser/abstract-item');
var All = require('../../src/condition-parser/all');
var Clock = require('../../src/condition-parser/clock');
var OneOf = require('../../src/condition-parser/one-of');

describe('condition-parser/abstract-item', function () {
  it('should be able to get all valid items', function () {
    expect(function () {
      var changingTime = 15;

      var all = AbstractItem.getItem({
        childs: { all: {} },
        changingTime: changingTime
      });

      var oneOf = AbstractItem.getItem({
        childs: { oneOf: {} },
        changingTime: changingTime
      });

      var clock = AbstractItem.getItem({
        childs: { clock: { from: Date.now() } },
        changingTime: changingTime
      });

      expect(all).to.be.an.instanceof(All)
        .with.property('changingTime', changingTime);

      expect(oneOf).to.be.an.instanceof(OneOf)
        .with.property('changingTime', changingTime);

      expect(clock).to.be.an.instanceof(Clock)
        .with.property('changingTime', changingTime);
    }).to.not.throw();
  });

  it('should not be able to get invalid items', function () {
    expect(function () {
      AbstractItem.getItem({
        childs: {}
      });
    }).to.throw();

    expect(function () {
      AbstractItem.getItem({
        childs: { invalidItem: {} }
      });
    }).to.throw();
  });

  it('should pass right path to invalid item', function () {
    expect(function () {
      AbstractItem.getItem({
        childs: { all: [ { oneOf: [ { clock: {} } ] } ] }
      });
    }).to.throw('all[0].oneOf[0].clock');
  });

  it('should have always false as status', function () {
    var item = new AbstractItem();

    expect(item.getStatus()).to.eql('false');
  });
});
