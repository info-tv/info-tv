var Sequelize = require('sequelize');
var _ = require('lodash');

var AbstractController = require('./_abstract-controller');
var models = require('../../models');
var Display = models['Display'];

module.exports = {
  before: AbstractController.before,

  /**
   * Find Display where id = req.params.id and store it to req.instance
   *
   * 404 Not Found             - if instance was not found
   * 500 Internal Server Error - if there was any other problems
   */
  findById: AbstractController.findById.bind(this, Display),

  /**
   * GET /api/v1/displays
   *
   * 200 OK                    - if there was no problems
   * 500 Internal Server Error - if there was any problems
   */
  index: AbstractController.index.bind(this, Display),

  /**
   * POST /api/v1/displays
   *
   * 201 Created with no content - if Display was created
   * - Location: url for the created Display
   * 400 Bad Request             - if validation failed
   * 500 Internal Server Error   - if there was any other problems
   */
  create: AbstractController.create.bind(this, Display),

  /**
   * GET /api/v1/displays/:id
   *
   * 200 OK                    - if Display was found
   * 404 Not Found             - if Display was not found
   * 500 Internal Server Error - if there was any other problems
   */
  show: AbstractController.show.bind(this, Display),

  /**
   * PUT /api/v1/displays/:id
   *
   * 200 OK                    - if Display was updated
   * 400 Bad Request           - if validation failed
   * 404 Not Found             - if Display was not found
   * 500 Internal Server Error - if there was any other problems
   */
  update: AbstractController.update.bind(this, Display),

  /**
   * DELETE /api/v1/displays/:id
   *
   * 204 No Content            - if Display was destroyed
   * 404 Not Found             - if Display was not found
   * 500 Internal Server Error - if there was any other problems
   */
  destroy: AbstractController.destroy.bind(this, Display)
};
