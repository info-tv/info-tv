var Epilogue = require('epilogue');
var expect = require('chai').expect;
var express = require('express');
var Sequelize = require('sequelize');
_ = require('lodash');
var $ = require('../_utils');

// files to test
var getSituationResource = require('../../src/api/situation');

// other needed files
var getSituationModel = require('../../src/models/situation');

describe('api/situation', function () {
  var sequelize, api, epilogue;

  before(function (done) {
    api = express();
    sequelize = new Sequelize('db', null, null, {
      dialect: 'sqlite',
      logging: false
    });

    epilogue = new Epilogue.initialize({
      app: api,
      sequelize: sequelize
    });
    // hack: make Epilogue class methods available to just created instance.
    _.extend(epilogue, Epilogue);

    done();
  });

  it('should use models/situation as database model', function () {
    var resource = getSituationResource(epilogue, sequelize);
    var Model = getSituationModel(sequelize);

    // assert resource uses models/situation as model
    expect(resource.model).to.equal(Model);
  });

  it('should create resource', function () {
    var fn = function () { return _.get(api, '_router.stack') }

    var resource = getSituationResource(epilogue, sequelize);

    // assert resource is defined
    expect(fn()).to.be.an('array');
  });

  it('should cache the resource', function () {
    var oldResource = getSituationResource(epilogue, sequelize);
    var newResource = getSituationResource(epilogue, sequelize);

    // assert new resource is old resource
    expect(newResource).to.be.equal(oldResource);
  });

  it('should be mounted to /situations[/:id]', function () {
    var resource = getSituationResource(epilogue, sequelize);

    var paths = _.map(resource.app._router.stack, function (item) {
      return _.get(item, 'route.path');
    });

    // assert paths to contain /situations and /situations/:id
    expect(paths).to.include.all.members(['/situations', '/situations/:id']);
  });

  //it('should validate input when creating resource', $.todo);
  //it('should validate input when updating resource', $.todo);
  //it('should validate condition field right', $.todo);
  //it('should validate changingTime field right', $.todo);
  //it('should send status field with others', $.todo);
});
