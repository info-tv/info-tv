var expect = require('chai').expect;
var Sequelize = require('sequelize');
_ = require('lodash');
var $ = require('../_utils');

// files to test
var getScreenModel = require('../../src/models/screen');

describe('models/screen', function () {
  var sequelize;

  before(function (done) {
    sequelize = new Sequelize('db', null, null, {
      dialect: 'sqlite'
    });

    done();
  });

  it('should create database model', function () {
    var fn = function () { return sequelize.model('Screen'); }

    // assert model is not defined
    expect(sequelize.isDefined('Screen')).to.be.false;

    var model = getScreenModel(sequelize);

    // assert model is defined
    expect(fn).to.not.throw(Error);
    expect(model).to.be.equal(fn());
  });

  it('should cache the database model', function () {
    var oldModel = getScreenModel(sequelize);
    var newModel = getScreenModel(sequelize);

    // assert new model is old model
    expect(newModel).to.be.equal(oldModel);
  });
});
