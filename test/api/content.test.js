var Epilogue = require('epilogue');
var express = require('express');
var Sequelize = require('sequelize');
_ = require('lodash');

var chai = require('chai');
var expect = chai.expect;

var $ = require('../_utils');

// files to test
var getContentResource = require('../../src/api/content');

// other needed files
var getContentModel = require('../../src/models/content');

describe('api/content', function () {
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

  it('should use models/content as database model', function () {
    var resource = getContentResource(epilogue, sequelize);
    var Model = getContentModel(sequelize);

    // assert resource uses models/content as model
    expect(resource.model).to.equal(Model);
  });

  it('should create resource', function () {
    var fn = function () { return _.get(api, '_router.stack') }

    var resource = getContentResource(epilogue, sequelize);

    // assert resource is defined
    expect(fn()).to.be.an('array');
  });

  it('should cache the resource', function () {
    var oldResource = getContentResource(epilogue, sequelize);
    var newResource = getContentResource(epilogue, sequelize);

    // assert new resource is old resource
    expect(newResource).to.be.equal(oldResource);
  });

  it('should be mounted to /contents[/:id]', function () {
    var resource = getContentResource(epilogue, sequelize);

    var paths = _.map(resource.app._router.stack, function (item) {
      return _.get(item, 'route.path');
    });

    // assert paths to contain /contents and /contents/:id
    expect(paths).to.include.all.members(['/contents', '/contents/:id']);
  });
});
