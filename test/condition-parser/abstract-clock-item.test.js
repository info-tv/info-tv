var expect = require('chai').expect;
var Sequelize = require('sequelize');
_ = require('lodash');

var chai = require('chai');
chai.use(require('chai-spies'));

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

  it('should clear registered timeouts on destroy', function () {
    var spy = chai.spy();

    var item = new AbstractClockItem();
    item._timeoutIDs.push(setTimeout(spy, 0));
    item.destroy();

    setTimeout(function () {
      expect(spy).to.have.not.been.called();
    }, 50);
  });

  it('should allow watching a clock', function () {
    var spy = chai.spy();

    var item = new AbstractClockItem();
    item._listen(new Date(Date.now() + 0), spy);

    // listener is added to array
    expect(item._timeoutIDs).to.have.length(1);

    setTimeout(function () {
      // callback is called once
      expect(spy).to.have.been.called.once();

      // listener is removed from array
      expect(item._timeoutIDs).to.have.length(0);
    }, 50);
  });

  it('should allow multiple clock watchers at the same time', function () {
    var spies = [ chai.spy(), chai.spy() ];

    var item = new AbstractClockItem();
    item._listen(new Date(Date.now() + 0), spies[0]);
    item._listen(new Date(Date.now() + 5), spies[1]);

    // listener is added to array
    expect(item._timeoutIDs).to.have.length(2);

    setTimeout(function () {
      // callbacks are called once
      expect(spies[0]).to.have.been.called.once();
      expect(spies[1]).to.have.been.called.once();

      // listeners are removed from array
      expect(item._timeoutIDs).to.have.length(0);
    }, 50);
  });

  it('should change status if new status is allowed', function () {
    var spy = chai.spy();

    var item = new AbstractClockItem();
    item.status = 'true';
    item._changeStatusIf(['true'], 'false', 'true', spy);

    expect(item.status).to.eql('false');
    expect(spy).to.have.been.called.once();

    item._changeStatusIf(['true'], 'false', 'true', spy);

    expect(item.status).to.eql('false');
    expect(spy).to.have.been.called.twice();
  });

  it('should not change status if new status is not allowed', function () {
    var spy = chai.spy();

    var item = new AbstractClockItem();
    item.status = 'true';
    item._changeStatusIf(['false'], 'false', 'true', spy);

    expect(item.status).to.eql('true');
    expect(spy).to.not.have.been.called();

    item._changeStatusIf(['false'], 'false', 'true', spy);

    expect(item.status).to.eql('true');
    expect(spy).to.not.have.been.called();
  });
});
