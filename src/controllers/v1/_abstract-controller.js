var restify = require('restify');
var Sequelize = require('sequelize');
var _ = require('lodash');

/**
 * @apiDefine 400BadRequest
 *
 * @apiError (4xx) 400 Bad Request
 *
 * @apiErrorExample {json} 400 Bad Request
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "code": "ValidationError,
 *       "errors": [
 *         {
 *           "message": "some_required_field cannot be null",
 *           "path": "some_required_field",
 *           "type": "notNull Violation",
 *           "value": null
 *         }
 *       ]
 *     }
 */

/**
 * @apiDefine 404NotFound
 *
 * @apiError (4xx) 404 Not Found
 *
 * @apiErrorExample {json} 404 Not Found
 *     HTTP/1.1 404 Not Found
 *     {
 *       "code": "NotFoundError",
 *       "message": ""
 *     }
 */

/**
 * @apiDefine 500InternalServerError
 *
 * @apiError (5xx) 500 Internal Server Error
 *
 * @apiErrorExample {json} 500 Internal Server Error
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "code": "InternalError",
 *       "message": ""
 *     }
 */

module.exports = {
  before: [
    {name: 'findById', only: ['show', 'update', 'destroy']}
  ],

  /**
   * Find Model where id = req.params.id and store it to req.instance
   *
   * 404 Not Found             - if instance was not found
   * 500 Internal Server Error - if there was any other problems
   *
   * @param {Sequelize.Model} Model model
   * @param {Request} req request
   * @param {Response} res response
   * @param {function} next next handler
   */
  findById: function (Model, req, res, next) {
    Model.findById(req.params.id)
      .then(function (instance) {
        if (!instance) {
          res.send(new restify.NotFoundError());
        } else {
          req.instance = instance;
          next();
        }
      })
      .catch(function (e) {
        res.send(new restify.InternalServerError());
        console.log(e);
      });
  },

  /**
   * 200 OK                    - if there was no problems
   * 500 Internal Server Error - if there was any problems
   *
   * @param {Sequelize.Model} Model model
   * @param {Request} req request
   * @param {Response} res response
   */
  index: function (Model, req, res) {
    Model.findAll()
      .then(function (instances) {
        res.send(instances);
      })
      .catch(function (e) {
        res.send(new restify.InternalServerError());
        console.log(e);
      });
  },

  /**
   * 201 Created with no content - if instance was created
   * - Location: url for the created instance
   * 400 Bad Request             - if validation failed
   * 500 Internal Server Error   - if there was any other problems
   *
   * @param {Sequelize.Model} Model model
   * @param {Request} req request
   * @param {Response} res response
   */
  create: function (Model, req, res) {
    Model.create(_.extend(Model.defaultValues(), req.body))
      .then(function (instance) {
        res.header('Location', req.url + '/' + instance.id);
        res.send(201);
      })
      .catch(Sequelize.ValidationError, function (e) {
        res.send(400, {
          code: 'ValidationError',
          errors: e.errors
        });
      })
      .catch(function (e) {
        res.send(new restify.InternalServerError());
        console.log(e);
      });
  },

  /**
   * 200 OK                    - if instance was found
   * 404 Not Found             - if instance was not found
   * 500 Internal Server Error - if there was any other problems
   *
   * @param {Sequelize.Model} Model model
   * @param {Request} req request
   * @param {Response} res response
   */
  show: function (Model, req, res) {
    res.send(req.instance);
  },

  /**
   * 200 OK                    - if instance was updated
   * 400 Bad Request           - if validation failed
   * 404 Not Found             - if instance was not found
   * 500 Internal Server Error - if there was any other problems
   *
   * @param {Sequelize.Model} Model model
   * @param {Request} req request
   * @param {Response} res response
   */
  update: function (Model, req, res) {
    req.instance.update(_.extend(Model.defaultValues(), req.body))
      .then(function (instance) {
        res.send(instance);
      })
      .catch(Sequelize.ValidationError, function (e) {
        res.send(400, {
          code: 'ValidationError',
          errors: e.errors
        });
      })
      .catch(function (e) {
        res.send(new restify.InternalServerError());
        console.log(e);
      });
  },

  /**
   * 204 No Content            - if instance was destroyed
   * 404 Not Found             - if instance was not found
   * 500 Internal Server Error - if there was any other problems
   *
   * @param {Sequelize.Model} Model model
   * @param {Request} req request
   * @param {Response} res response
   */
  destroy: function (Model, req, res) {
    req.instance.destroy()
      .then(function () {
        res.send(204);
      })
      .catch(function (e) {
        res.send(new restify.InternalServerError());
        console.log(e);
      });
  }
};
