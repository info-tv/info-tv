var Sequelize = require('sequelize');
var _ = require('lodash');

var AbstractController = require('./_abstract-controller');
var models = require('../../models');
var Screen = models['Screen'];

module.exports = {
  before: AbstractController.before,

  /**
   * Find Screen where id = req.params.id and store it to req.instance
   *
   * 404 Not Found             - if instance was not found
   * 500 Internal Server Error - if there was any other problems
   */
  findById: AbstractController.findById.bind(this, Screen),

  /**
   * GET /api/v1/screens
   *
   * 200 OK                    - if there was no problems
   * 500 Internal Server Error - if there was any problems
   */
  index: AbstractController.index.bind(this, Screen),

  /**
   * POST /api/v1/screens
   *
   * 201 Created with no content - if Screen was created
   * - Location: url for the created Screen
   * 400 Bad Request             - if validation failed
   * 500 Internal Server Error   - if there was any other problems
   */
  create: AbstractController.create.bind(this, Screen),

  /**
   * GET /api/v1/screens/:id
   *
   * 200 OK                    - if Screen was found
   * 404 Not Found             - if Screen was not found
   * 500 Internal Server Error - if there was any other problems
   */
  show: AbstractController.show.bind(this, Screen),

  /**
   * PUT /api/v1/screens/:id
   *
   * 200 OK                    - if Screen was updated
   * 400 Bad Request           - if validation failed
   * 404 Not Found             - if Screen was not found
   * 500 Internal Server Error - if there was any other problems
   */
  update: AbstractController.update.bind(this, Screen),

  /**
   * DELETE /api/v1/screens/:id
   *
   * 204 No Content            - if Screen was destroyed
   * 404 Not Found             - if Screen was not found
   * 500 Internal Server Error - if there was any other problems
   */
  destroy: AbstractController.destroy.bind(this, Screen)
};
