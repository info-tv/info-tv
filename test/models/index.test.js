var expect = require('chai').expect;
var Sequelize = require('sequelize');
_ = require('lodash');
var $ = require('../_utils');

// files to test
var getModels = require('../../src/models');

describe('models', function () {
  var sequelize;

  beforeEach(function (done) {
    sequelize = new Sequelize('db', null, null, {
      dialect: 'sqlite'
    });

    done();
  });

  it('should load all models', function () {
    var models = getModels(sequelize);

    // assert models has Content, Screen, and Situation models
    expect(models).to.include.all.keys('Content', 'Screen', 'Situation');
  });

  it('should cache the models', function () {
    var oldModels = getModels(sequelize);
    var newModels = getModels(sequelize);

    // assert new models are old models
    expect(_.values(newModels)).to.have.same.members(_.values(oldModels));
  });
});
