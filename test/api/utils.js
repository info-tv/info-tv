var expect = require('chai').expect;
_ = require('lodash');

var LockManager = require('../_lock-manager');
var $ = require('../_utils');

// files to test
var utils = require('../../src/api/utils');

// other needed files
var validate = require('validate.js');

describe('api/utils', function () {
  beforeEach(function () {
    return LockManager.getLock('shared');
  });

  describe('JSON validator', function () {
    it('should be defined', function () {
      var validator = validate.validators.JSON;

      expect(validator).to.be.a('function');

      LockManager.free();
    });

    it('should accept valid JSON', function () {
      var values = [ 'false', '{}', '{"value": 1}' ];

      _(values).each(function(value) {
        var fn = function () { return validate.validators.JSON(value) };

        // assert fn don't throw an error
        expect(fn).to.not.throw(Error);

        // assert fn return nothing
        expect(fn()).to.be.an('undefined');
      });

      LockManager.free();
    });

    it('should not accept invalid JSON', function () {
      var values = [ '', 'asdf', 'false, true', '{]', '{value: 1}' ];

      _(values).each(function(value) {
        var fn = function () { return validate.validators.JSON(value) };

        // assert fn don't throw an error
        expect(fn).to.not.throw(Error);

        // assert fn returns string
        expect(fn()).to.be.an('string');
      });

      LockManager.free();
    });
  });

  describe('Condition validator', function () {
    it('should be defined', function () {
      var validator = validate.validators.condition;

      // assert validator is function
      expect(validator).to.be.a('function');

      LockManager.free();
    });

    //it('should use condition parser', $.todo);
    //it('should accept valid condition', $.todo);
    //it('should not accept invalid condition', $.todo);
  });
});
