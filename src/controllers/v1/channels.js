var Sequelize = require('sequelize');
var _ = require('lodash');

var AbstractController = require('./_abstract-controller');
var models = require('../../models');
var Channel = models['Channel'];

module.exports = {
  before: AbstractController.before,

  /**
   * Find Channel where id = req.params.id and store it to req.instance
   *
   * 404 Not Found             - if instance was not found
   * 500 Internal Server Error - if there was any other problems
   */
  findById: AbstractController.findById.bind(this, Channel),

  /**
   * GET /api/v1/channels
   *
   * 200 OK                    - if there was no problems
   * 500 Internal Server Error - if there was any problems
   */
  index: AbstractController.index.bind(this, Channel),

  /**
   * POST /api/v1/channels
   *
   * 201 Created with no content - if Channel was created
   * - Location: url for the created Channel
   * 400 Bad Request             - if validation failed
   * 500 Internal Server Error   - if there was any other problems
   */
  create: AbstractController.create.bind(this, Channel),

  /**
   * GET /api/v1/channels/:id
   *
   * 200 OK                    - if Channel was found
   * 404 Not Found             - if Channel was not found
   * 500 Internal Server Error - if there was any other problems
   */
  show: AbstractController.show.bind(this, Channel),

  /**
   * PUT /api/v1/channels/:id
   *
   * 200 OK                    - if Channel was updated
   * 400 Bad Request           - if validation failed
   * 404 Not Found             - if Channel was not found
   * 500 Internal Server Error - if there was any other problems
   */
  update: AbstractController.update.bind(this, Channel),

  /**
   * DELETE /api/v1/channels/:id
   *
   * 204 No Content            - if Channel was destroyed
   * 404 Not Found             - if Channel was not found
   * 500 Internal Server Error - if there was any other problems
   */
  destroy: AbstractController.destroy.bind(this, Channel)
};
