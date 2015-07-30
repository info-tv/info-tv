var Sequelize = require('sequelize');
_ = require('lodash');

var chai = require('chai');
var expect = chai.expect;

var $ = require('../_utils');

// files to test
var OneOf = require('../../src/condition-parser/one-of');

// other needed files
var AbstractItem = require('../../src/condition-parser/abstract-item');

describe('condition-parser/one-of', function () {
  it('should use highest status of its childs as its own status', function () {
    var combinations = $.combinations(['true', 'changing to false', 'changing to true', 'false']);

    _.each(combinations, function (statuses) {
      var oneOf = new OneOf();

      _.each(statuses, function (status) {
        var item = new AbstractItem();
        item.status = status;

        oneOf.childs.push(item);
      });

      expect(oneOf.getStatus()).to.eql(statuses[0]);
    });
  });

  it('should change its status right', function (done) {
    var now = Date.now();

    var oneOf = new OneOf('', [
      { clock: { to:  now + 50 } },
      { clock: { from: now + 150 } }
    ], 45);

    var spy = chai.spy();

    var statuses = ['true', 'changing to false', 'false', 'changing to true', 'true'];
    var index = 0;

    oneOf.listen(function () {
      expect(oneOf.getStatus()).to.eql(statuses[index++]);

      spy();
    });

    expect(oneOf.getStatus()).to.eql(statuses[index++]);

    setTimeout(function () {
      expect(spy).to.have.been.called.exactly(4);

      done();
    }, 200);
  });

  it('should allow multiple listeners', function (done) {
    var now = Date.now();

    var oneOf = new OneOf('', [
      { clock: { to:  now + 50 } },
      { clock: { from: now + 150 } }
    ], 45);

    var spies = [chai.spy(), chai.spy()];

    oneOf.listen(spies[0]);
    oneOf.listen(spies[1]);

    setTimeout(function () {
      expect(spies[0]).to.have.been.called.exactly(4);
      expect(spies[1]).to.have.been.called.exactly(4);

      done();
    }, 200);
  });
});
