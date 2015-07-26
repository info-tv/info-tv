var expect = require('chai').expect;
var Sequelize = require('sequelize');
_ = require('lodash');

var LockManager = require('../_lock-manager');
var $ = require('../_utils');

// files to test
var getContentModel = require('../../src/models/content');

describe('models/content', function () {
  var sequelize;

  before(function () {
    sequelize = new Sequelize('db', null, null, {
      dialect: 'sqlite'
    });
  });

  beforeEach(function () {
    return LockManager.getLock('shared');
  });

  it('should create database model', function () {
    var fn = function () { return sequelize.model('Content'); }

    // assert model is not defined
    expect(sequelize.isDefined('Content')).to.be.false;

    var model = getContentModel(sequelize);

    // assert model is defined
    expect(fn).to.not.throw(Error);
    expect(model).to.be.equal(fn());

    LockManager.free();
  });

  it('should cache the database model', function () {
    var oldModel = getContentModel(sequelize);
    var newModel = getContentModel(sequelize);

    // assert new model is old model
    expect(newModel).to.be.equal(oldModel);

    LockManager.free();
  });

  it('should have right fields', function () {
    var Content = getContentModel(sequelize);
    var content = Content.build();

    // assert content has type field
    expect(content.dataValues).to.include.all.keys('type');

    LockManager.free();
  });
});




