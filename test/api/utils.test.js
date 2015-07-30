_ = require('lodash');

var chai = require('chai');
var expect = chai.expect;

var $ = require('../_utils');

// files to test
var utils = require('../../src/api/utils');

// other needed files
var validate = require('validate.js');

describe('api/utils', function () {
  describe('JSON validator', function () {
    it('should be defined', function () {
      var validator = validate.validators.JSON;

      expect(validator).to.be.a('function');
    });

    it('should accept valid JSON', function () {
      var values = [ 'false', '{}', '{"value": 1}' ];

      _(values).each(function(value) {
        expect(function () {
          var error = validate.validators.JSON(value);

          expect(error).to.be.an('undefined');
        }).to.not.throw();
      });
    });

    it('should not accept invalid JSON', function () {
      var values = [ '', 'asdf', 'false, true', '{]', '{value: 1}' ];

      _(values).each(function(value) {
        expect(function () {
          var error = validate.validators.JSON(value);

          expect(error).to.be.an('string');
        }).to.not.throw();
      });
    });
  });

  describe('Condition validator', function () {
    it('should be defined', function () {
      var validator = validate.validators.condition;

      expect(validator).to.be.a('function');
    });

    it('should accept valid condition', function () {
      var values = [ { all: {}}, '{"all":{}}' ];

      _(values).each(function(value) {
        expect(function () {
          var error = validate.validators.condition(value);

          expect(error).to.not.exist;
        }).to.not.throw();
      });
    });

    it('should not accept invalid condition', function () {
      var values = [ undefined, 'invalid condition', { invalidCondition: {}} ];

      _(values).each(function(value) {
        expect(function () {
          var error = validate.validators.condition(value);

          expect(error).to.be.an('string');
        }).to.not.throw();
      });
    });
  });
});
