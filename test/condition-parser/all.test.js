var Sequelize = require('sequelize');
var validate = require('validate.js');
_ = require('lodash');

var chai = require('chai');
var expect = chai.expect;

var $ = require('../_utils');

// files to test
var All = require('../../src/condition-parser/all');

// other needed files
var AbstractItem = require('../../src/condition-parser/abstract-item');

describe('condition-parser/all', function () {
  it('should use lowest status of its childs as its own status', function () {
    var combinations = $.combinations(['false', 'changing to true', 'changing to false', 'true']);

    _.each(combinations, function (statuses) {
      var all = new All();

      _.each(statuses, function (status) {
        var item = new AbstractItem();
        item.status = status;

        all.childs.push(item);
      });

      expect(all.getStatus()).to.eql(statuses[0]);
    });
  });

  it('should change its status right', function (done) {
    var now = Date.now();

    var all = new All('', [
      { clock: { from:  now + 50 } },
      { clock: { to: now + 150 } }
    ], 45);

    var spy = chai.spy();

    var statuses = ['false', 'changing to true', 'true', 'changing to false', 'false'];
    var index = 0;

    all.listen(function () {
      expect(all.getStatus()).to.eql(statuses[index++]);

      spy();
    });

    expect(all.getStatus()).to.eql(statuses[index++]);

    setTimeout(function () {
      expect(spy).to.have.been.called.exactly(4);

      done();
    }, 200);
  });

  it('should allow multiple listeners', function (done) {
    var now = Date.now();

    var all = new All('', [
      { clock: { from:  now + 50 } },
      { clock: { to: now + 150 } }
    ], 45);

    var spies = [chai.spy(), chai.spy()];

    all.listen(spies[0]);
    all.listen(spies[1]);

    setTimeout(function () {
      expect(spies[0]).to.have.been.called.exactly(4);
      expect(spies[1]).to.have.been.called.exactly(4);

      done();
    }, 200);
  });
});
