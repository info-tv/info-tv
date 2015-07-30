_ = require('lodash');
var $ = require('../_utils');

var chai = require('chai');
var expect = chai.expect;

// files to test
var config = require('../../src/config/config.json');

describe('config/config.json', function () {
  describe('development', function () {
    it('should contain development', function () {
      var value = _.get(config, 'development');

      // assert there is development
      expect(value).to.exist;
    });

    it('should contain development.username', function () {
      var value = _.get(config, 'development.username');

      // assert there is development.username
      expect(value).to.exist;
    });

    it('should contain development.database', function () {
      var value = _.get(config, 'development.database');

      // assert there is development.database
      expect(value).to.exist;
    });

    it('should contain development.dialect', function () {
      var value = _.get(config, 'development.dialect');

      // assert there is development.dialect
      expect(value).to.exist;
    });
  });
});
