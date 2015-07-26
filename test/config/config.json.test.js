var expect = require('chai').expect;
_ = require('lodash');

var LockManager = require('../_lock-manager');
var $ = require('../_utils');

// files to test
var config = require('../../src/config/config.json');

describe('config/config.json', function () {
  beforeEach(function () {
    return LockManager.getLock('shared');
  });

  describe('development', function () {
    it('should contain development', function () {
      var value = _.get(config, 'development');

      // assert there is development
      expect(value).to.exist;

      LockManager.free();
    });

    it('should contain development.username', function () {
      var value = _.get(config, 'development.username');

      // assert there is development.username
      expect(value).to.exist;

      LockManager.free();
    });

    it('should contain development.database', function () {
      var value = _.get(config, 'development.database');

      // assert there is development.database
      expect(value).to.exist;

      LockManager.free();
    });

    it('should contain development.dialect', function () {
      var value = _.get(config, 'development.dialect');

      // assert there is development.dialect
      expect(value).to.exist;

      LockManager.free();
    });
  });
});
