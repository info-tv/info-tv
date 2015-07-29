var expect = require('chai').expect;
var Sequelize = require('sequelize');
_ = require('lodash');

var $ = require('../_utils');

var chai = require('chai');
chai.use(require('chai-spies'));

// files to test
var To = require('../../src/condition-parser/to');

describe('condition-parser/to', function () {
  it('should have right status after constructing it', function () {
    expect(function () {
      var now = Date.now();

      var to = new To(now + 200, 100);
      expect(to.getStatus()).to.eql('true');

      to = new To(now + 100, 200);
      expect(to.getStatus()).to.eql('changing to false');

      to = new To(now - 100, 100);
      expect(to.getStatus()).to.eql('false');
    }).not.to.throw();
  });

  it('should change its status right', function (done) {
    var now = Date.now();

    var to = new To(now + 200, 100);

    var spy = chai.spy();

    var statuses = ['true', 'changing to false', 'false'];
    var index = 0;

    to.listen(function () {
      expect(to.getStatus()).to.eql(statuses[index++]);

      spy();
    });

    expect(to.getStatus()).to.eql(statuses[index++]);

    setTimeout(function () {
      expect(spy).to.have.been.called.twice();

      done();
    }, 500);
  });

  it('should allow multiple listeners', function (done) {
    var now = Date.now();

    var to = new To(now + 200, 100);

    var spies = [chai.spy(), chai.spy()];

    to.listen(spies[0]);
    to.listen(spies[1]);

    setTimeout(function () {
      expect(spies[0]).to.have.been.called.twice();
      expect(spies[1]).to.have.been.called.twice();

      done();
    }, 500);
  });
});
