var Sequelize = require('sequelize');
_ = require('lodash');

var chai = require('chai');
var expect = chai.expect;

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
    expect(function () {
      expect(sequelize.isDefined('Screen')).to.be.false;

      var model = getScreenModel(sequelize);

      expect(model).to.be.equal(sequelize.model('Screen'));
    }).to.not.throw();
  });

  it('should cache the database model', function () {
    var oldModel = getScreenModel(sequelize);
    var newModel = getScreenModel(sequelize);

    // assert new model is old model
    expect(newModel).to.be.equal(oldModel);
  });

  // it should have relation to situation
  // it should have relation to content through situation
});
