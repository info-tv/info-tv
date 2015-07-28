var expect = require('chai').expect;
var Sequelize = require('sequelize');
_ = require('lodash');

var chai = require('chai');
chai.use(require('chai-spies'));

var $ = require('../_utils');

// files to test
var AbstractGroup = require('../../src/condition-parser/abstract-group');

// Other needed files
var AbstractItem = require('../../src/condition-parser/abstract-item');
var All = require('../../src/condition-parser/all');
var Clock = require('../../src/condition-parser/clock');
var OneOf = require('../../src/condition-parser/one-of');

describe('condition-parser/abstract-group', function () {
  it('should accept all kind of childs', function () {
    expect(function () {
      var changingTime = Math.floor(Math.random() * 1000);

      var group = new AbstractGroup('', [
        { all: [] },
        { oneOf: [] },
        { clock: { from: Date.now() } }
      ], changingTime);

      expect(group).to.be.an.instanceof(AbstractGroup)
        .with.property('changingTime', changingTime);

      expect(group.childs[0]).to.be.an.instanceof(All)
        .with.property('changingTime', changingTime);

      expect(group.childs[1]).to.be.an.instanceof(OneOf)
        .with.property('changingTime', changingTime);

      expect(group.childs[2]).to.be.an.instanceof(Clock)
        .with.property('changingTime', changingTime);
    }).to.not.throw();
  });

  it('should accept an empty childs array', function () {
    expect(function () {
      var changingTime = Math.floor(Math.random() * 1000);

      var group = new AbstractGroup('', [], changingTime);

      expect(group).to.be.an.instanceof(AbstractGroup)
        .with.property('changingTime', changingTime);

      expect(group.childs).to.be.empty;
    }).to.not.throw();
  });

  it('should not accept any invalid childs', function () {
    expect(function () {
      new AbstractGroup('', [
        { invalidItem: {} }
      ]);
    }).to.throw();
  });

  it('it should destroy all childs on destroy', function () {
    var spyItem = chai.spy.object(['destroy']);

    var group = new AbstractGroup('', []);
    for (var i = 0; i < 5; i++) {
      group.childs.push(spyItem);
    }

    group.destroy();

    expect(spyItem.destroy).to.have.been.called.exactly(5);
  });

  it('should listen all childs', function () {
    var spyItem = chai.spy.object(['listen']);

    var group = new AbstractGroup('', []);
    for (var i = 0; i < 5; i++) {
      group.childs.push(spyItem);
    }

    group.listen();

    expect(spyItem.listen).to.have.been.called.exactly(5);
  });
});
