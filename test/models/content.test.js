var Sequelize = require('sequelize');
_ = require('lodash');

var chai = require('chai');
var expect = chai.expect;

var $ = require('../_utils');

// files to test
var getContentModel = require('../../src/models/content');

describe('models/content', function () {
  var sequelize;

  before(function (done) {
    sequelize = new Sequelize('db', null, null, {
      dialect: 'sqlite'
    });

    done();
  });

  it('should create database model', function () {
    expect(function() {
      expect(sequelize.isDefined('Content')).to.be.false;

      var model = getContentModel(sequelize);

      expect(model).to.be.equal(sequelize.model('Content'));
    }).to.not.throw();
  });

  it('should cache the database model', function () {
    var oldModel = getContentModel(sequelize);
    var newModel = getContentModel(sequelize);

    // assert new model is old model
    expect(newModel).to.be.equal(oldModel);
  });

  it('should have right fields', function () {
    var Content = getContentModel(sequelize);
    var content = Content.build();

    // assert content has type field
    expect(content.dataValues).to.include.all.keys('type');
  });

  // it should have relation to situation
  // it should have relation to screen through situation
});




