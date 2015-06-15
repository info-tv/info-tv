var Epilogue = require('epilogue');
var expect = require('chai').expect;
var express = require('express');
var Sequelize = require('sequelize');
_ = require('lodash');
var $ = require('../_utils');

// files to test
var getScreenResource = require('../../src/api/screen');

// other needed files
var getScreenModel = require('../../src/models/screen');

describe('api/screen', function () {
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

  it('should use models/screen as database model', function () {
    var resource = getScreenResource(epilogue, sequelize);
    var Model = getScreenModel(sequelize);

    // assert resource uses models/screen as model
    expect(resource.model).to.equal(Model);
  });

  it('should create resource', function () {
    var fn = function () { return _.get(api, '_router.stack') }

    var resource = getScreenResource(epilogue, sequelize);

    // assert resource is defined
    expect(fn()).to.be.an('array');
  });

  it('should cache the resource', function () {
    var oldResource = getScreenResource(epilogue, sequelize);
    var newResource = getScreenResource(epilogue, sequelize);

    // assert new resource is old resource
    expect(newResource).to.be.equal(oldResource);
  });



  it('should be mounted to /screens[/:id]', function () {
    var resource = getScreenResource(epilogue, sequelize);

    var paths = _.map(resource.app._router.stack, function (item) {
      return _.get(item, 'route.path');
    });

    // assert paths to contain /screens and /screens/:id
    expect(paths).to.include.all.members(['/screens', '/screens/:id']);
  });
});
