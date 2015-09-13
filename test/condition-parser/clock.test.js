var Sequelize = require('sequelize');
_ = require('lodash');

var chai = require('chai');
var expect = chai.expect;

var $ = require('../_utils');

// files to test
var Clock = require('../../src/condition-parser/clock');

// other needed files
var From = require('../../src/condition-parser/from');
var To = require('../../src/condition-parser/to');

module.exports = function () {
  describe('clock', function () {
    it('should accept both from and to', function () {
      expect(function () {
        var now = Date.now();

        var clock = new Clock('', now, now + 100);

        expect(clock).to.be.an.instanceof(Clock);
        expect(clock.from).to.be.an.instanceof(From);
        expect(clock.to).to.be.an.instanceof(To);
      }).to.not.throw();
    });

    it('should allow omitting either from or to', function () {
      expect(function () {
        var now = Date.now();
        var changingTime = Math.floor(Math.random() * 1000);

        var onlyFrom = new Clock('', now, null, changingTime);
        var onlyTo = new Clock('', null, now, changingTime);

        expect(onlyFrom).to.be.an.instanceof(Clock)
          .with.property('changingTime', changingTime);
        expect(onlyFrom.from).to.be.an.instanceof(From)
          .with.property('changingTime', changingTime);
        expect(onlyFrom.to).to.not.exist;

        expect(onlyTo).to.be.an.instanceof(Clock)
          .with.property('changingTime', changingTime);
        expect(onlyTo.from).to.not.exist;
        expect(onlyTo.to).to.be.an.instanceof(To)
          .with.property('changingTime', changingTime);
      }).to.not.throw();
    });

    it('should not allow from > to', function () {
      expect(function () {
        var now = Date.now();

        new Clock('', now + 100, now - 100);
      }).to.throw();
    });

    it('should change its status right', function (done) {
      var now = Date.now();

      var clock = new Clock('', now + 50, now + 150, 45);

      var spy = chai.spy();

      var statuses = ['false', 'changing to true', 'true', 'changing to false', 'false'];
      var index = 0;

      clock.listen(function () {
        expect(clock.getStatus()).to.eql(statuses[index++]);

        spy();
      });

      expect(clock.getStatus()).to.eql(statuses[index++]);

      setTimeout(function () {
        expect(spy).to.have.been.called.exactly(4);

        done();
      }, 200);
    });

    it('should listen both from and to', function () {
      var spyItem = chai.spy.object(['listen', 'getStatus']);

      var clock = new Clock('', Date.now());
      clock.from = spyItem;
      clock.to = spyItem;

      clock.listen();

      expect(spyItem.listen).to.have.been.called.twice();
    });
  });
};
