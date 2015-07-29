var expect = require('chai').expect;
var Sequelize = require('sequelize');
_ = require('lodash');

var $ = require('../_utils');

var chai = require('chai');
chai.use(require('chai-spies'));

// files to test
var From = require('../../src/condition-parser/from');

describe('condition-parser/from', function () {
  it('should have right status after constructing it', function () {
    expect(function () {
      var now = Date.now();

      var from = new From(now + 200, 100);
      expect(from.getStatus()).to.eql('false');

      from = new From(now + 100, 200);
      expect(from.getStatus()).to.eql('changing to true');

      from = new From(now - 100, 100);
      expect(from.getStatus()).to.eql('true');
    }).not.to.throw();
  });

  it('should change its status right', function (done) {
    var now = Date.now();

    var from = new From(now + 50, 45);

    var spy = chai.spy();

    var statuses = ['false', 'changing to true', 'true'];
    var index = 0;

    from.listen(function () {
      expect(from.getStatus()).to.eql(statuses[index++]);

      spy();
    });

    expect(from.getStatus()).to.eql(statuses[index++]);

    setTimeout(function () {
      expect(spy).to.have.been.called.twice();

      done();
    }, 100);
  });

  it('should allow multiple listeners', function (done) {
    var now = Date.now();

    var from = new From(now + 50, 45);

    var spies = [chai.spy(), chai.spy()];

    from.listen(spies[0]);
    from.listen(spies[1]);

    setTimeout(function () {
      expect(spies[0]).to.have.been.called.twice();
      expect(spies[1]).to.have.been.called.twice();

      done();
    }, 100);
  });
});
