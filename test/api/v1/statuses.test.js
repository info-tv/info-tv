var chakram = require('chakram');
var restify = require('restify');
var sequelize_fixtures = require('sequelize-fixtures');
var url = require('url');
var _ = require('lodash');
var expect = chakram.expect;

var $ = require('../../_utils');

// needed files
var models = require('../../../src/models');
var server = require('./_server');

var PORT = require('../../../config/index').server.port;
var URL = 'http://127.0.0.1:' + PORT + '/api/v1/statuses';

var statusSchema = {
  type: 'object',
  properties: {
    id: {
      type: 'integer'
    },
    DisplayId: {
      type: ['integer', 'null']
    },
    status: {
      type: 'string'
    },
    comment: {
      type: ['string', 'null']
    },
    created_at: {
      type: 'string'
    },
    update_at: {
      type: 'string'
    }
  }
};

module.exports = function () {
  describe('/statuses', function () {
    /**
     * Reset database and load fixtures
     */
    beforeEach(function (done) {
      var fixturePath = __dirname + '/fixtures/statuses.*';
      models.sequelize.sync({force: true, match: /test/i})
        .then(function () {
          return sequelize_fixtures.loadFile(fixturePath, models, {
              log: function () {
              }
            }
          );
        })
        .then(function () {
          done();
        })
        .catch(function (e) {
          done(new Error(e));
        });
    });

    it('should list all statuses', function () {
      var response = chakram.get(URL);

      // validate status and schema
      expect(response).to.have.status(200);
      expect(response).to.have.schema({
        type: 'array',
        items: statusSchema
      });

      // validate content
      expect(response).to.have.json(function (body) {
        expect(body).to.have.length(1);
      });

      return chakram.wait();
    });

    describe('should create status', function () {
      var validStatus = {
        status: 'ok',
        DisplayId: 1
      };

      it('with all required fields', function () {
        return testValidPost(_.extend({}, validStatus, {}));
      });

      it('with different DisplayId', function () {
        return testValidPost(_.extend({}, validStatus, {
          DisplayId: 2
        }));
      });

      it('with different status #1', function () {
        return testValidPost(_.extend({}, validStatus, {
          status: 'fail'
        }));
      });

      it('with different status #2', function () {
        return testValidPost(_.extend({}, validStatus, {
          status: 'lorem ipsum dolor sit amet'
        }));
      });

      it('with comment', function () {
        return testValidPost(_.extend({}, validStatus, {
          comment: 'Lorem ipsum dolor sit amet...'
        }));
      });

      it('with empty comment', function () {
        return testValidPost(_.extend({}, validStatus, {
          comment: ''
        }));
      });

      it('with all fields', function () {
        return testValidPost({
          DisplayId: 1,
          status: 'ok',
          comment: 'It works!'
        });
      });
    });

    describe('should not create status', function () {
      var validStatus = {
        status: 'ok',
        DisplayId: 1
      };

      it('with readonly id', function () {
        return testInvalidPost(_.extend({}, validStatus, {
          id: 1
        }));
      });

      it('without required DisplayId #1', function () {
        return testInvalidPost(_.extend({}, validStatus, {
          DisplayId: null
        }));
      });

      it('without required DisplayId #2', function () {
        return testInvalidPost(_.extend({}, validStatus, {
          DisplayId: undefined
        }));
      });

      it('with non-existing DisplayId', function () {
        return testInvalidPost(_.extend({}, validStatus, {
          DisplayId: 50
        }));
      });

      it('with non-integer DisplayId #1', function () {
        return testInvalidPost(_.extend({}, validStatus, {
          DisplayId: 1.2
        }));
      });

      it('with non-integer DisplayId #2', function () {
        return testInvalidPost(_.extend({}, validStatus, {
          DisplayId: 'this is not an integer'
        }));
      });

      it('without required status #1', function () {
        return testInvalidPost(_.extend({}, validStatus, {
          status: null
        }));
      });

      it('without required status #2', function () {
        return testInvalidPost(_.extend({}, validStatus, {
          status: undefined
        }));
      });

      it('with empty status', function () {
        return testInvalidPost(_.extend({}, validStatus, {
          status: ''
        }));
      });

      it('with non-string status #1', function () {
        return testInvalidPost(_.extend({}, validStatus, {
          status: []
        }));
      });

      it('with non-string status #2', function () {
        return testInvalidPost(_.extend({}, validStatus, {
          status: {}
        }));
      });

      it('with non-string comment #1', function () {
        return testInvalidPost(_.extend({}, validStatus, {
          comment: []
        }));
      });

      it('with non-string comment #2', function () {
        return testInvalidPost(_.extend({}, validStatus, {
          comment: {}
        }));
      });

      // TODO: blacklist these fields
      //it('with readonly createdAt', function () {
      //  return testInvalidPost(_.extend({}, validStatus, {
      //    createdAt: 0
      //  }));
      //});
      //
      //it('with readonly updatedAt', function () {
      //  return testInvalidPost(_.extend({}, validStatus, {
      //    updatedAt: 0
      //  }));
      //});
    });
  });
};

function testValidPost(data) {
  return chakram.post(URL, data).then(function (postResponse) {
    // validate status and header
    expect(postResponse).to.have.status(201);
    expect(postResponse).to.have.header('Location');

    // get id of created resource
    var location = postResponse.response.headers['location'];
    expect(location).to.match(/\d+$/);
    var id = location.match(/\d+$/)[0];

    var getResponse = chakram.get(URL + '/' + id, data);

    // validate status and schema
    expect(getResponse).to.have.status(200);
    expect(getResponse).to.have.schema(statusSchema);

    // validate content
    expect(getResponse).to.have.json(function (body) {
      expect(body).to.containSubset(data);
    });

    return chakram.wait();
  });
}

function testInvalidPost(data) {
  var response = chakram.post(URL, data);

  // validate status
  expect(response).to.have.status(400);

  return chakram.wait();
}
