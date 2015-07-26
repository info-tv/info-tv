var expect = require('chai').expect;
var Sequelize = require('sequelize');
_ = require('lodash');
var $ = require('../_utils');

// files to test
var getSituationModel = require('../../src/models/situation');

describe('models/situation', function () {
  var sequelize;

  before(function (done) {
    sequelize = new Sequelize('db', null, null, {
      dialect: 'sqlite'
    });

    done();
  });

  it('should create database model', function () {
    var fn = function () { return sequelize.model('Situation'); }

    // assert model is not defined
    expect(sequelize.isDefined('Situation')).to.be.false;

    var model = getSituationModel(sequelize);

    // assert model is defined
    expect(fn).to.not.throw(Error);
    expect(model).to.be.equal(fn());
  });

  it('should cache the database model', function () {
    var oldModel = getSituationModel(sequelize);
    var newModel = getSituationModel(sequelize);

    // assert new model is old model
    expect(newModel).to.be.equal(oldModel);
  });

  it('should have right fields', function () {
    var Situation = getSituationModel(sequelize);
    var situation = Situation.build();

    // assert situation has condition, changingTime, and status fields
    expect(situation.dataValues).to.include.all.keys('condition', 'changingTime', 'status');
  });
});
