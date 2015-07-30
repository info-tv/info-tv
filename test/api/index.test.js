var Epilogue = require('epilogue');
var express = require('express');
var Sequelize = require('sequelize');
_ = require('lodash');

var chai = require('chai');
var expect = chai.expect;

var $ = require('../_utils');

// files to test
var getAPI = require('../../src/api');

describe('api', function () {
  var app, sequelize, epilogue;

  before(function(done) {
    app = express();
    sequelize = new Sequelize('db', null, null, {
      dialect: 'sqlite',
      logging: false
    });

    epilogue = new Epilogue.initialize({
      app: app,
      sequelize: sequelize
    });
    // hack: make Epilogue class methods available to just created instance.
    _.extend(epilogue, Epilogue);

    done();
  });

  it('should create api', function () {
    var fn = function () { return _.get(app, '_router.stack') }

    var api = getAPI(app, sequelize);

    // assert api is defined
    expect(fn()).to.be.an('array');
  });

  it('should cache the api', function () {
    var oldAPI = getAPI(app, sequelize);
    var newAPI = getAPI(app, sequelize);

    // assert new resource is old resource
    expect(newAPI).to.be.equal(oldAPI);
  });

  it('should load all resources', function () {
    var api = getAPI(app, sequelize);

    var paths = _.map(api.stack, function (item) {
      return _.get(item, 'route.path');
    });

    // assert paths to contain /contents, /screens, and /situations
    expect(paths).to.include.all.members([
      '/contents',
      '/screens',
      '/situations'
    ]);
  });

  it('should be mounted to /api', function () {
    var api = getAPI(app, sequelize);

    var router = _.find(app._router.stack, function (router) {
      return router.handle === api;
    });

    if (router !== undefined) {
      // assert router match paths starting with /api
      expect(router.regexp.exec('/api')).to.not.be.null;
    }
  });
});
