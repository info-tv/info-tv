var Sequelize = require('sequelize');
var _ = require('lodash');

var AbstractController = require('./_abstract-controller');
var models = require('../../models');
var Status = models['Status'];

module.exports = {
  before: AbstractController.before,

  /**
   * Find Status where id = req.params.id and store it to req.instance
   *
   * 404 Not Found             - if instance was not found
   * 500 Internal Server Error - if there was any other problems
   */
  findById: AbstractController.findById.bind(this, Status),

  /**
   * GET /api/v1/statuses
   *
   * 200 OK                    - if there was no problems
   * 500 Internal Server Error - if there was any problems
   */
  index: AbstractController.index.bind(this, Status),

  /**
   * POST /api/v1/statuses
   *
   * 201 Created with no content - if Status was created
   * - Location: url for the created Status
   * 400 Bad Request             - if validation failed
   * 500 Internal Server Error   - if there was any other problems
   */
  create: AbstractController.create.bind(this, Status),

  /**
   * GET /api/v1/statuses/:id
   *
   * 200 OK                    - if Status was found
   * 404 Not Found             - if Status was not found
   * 500 Internal Server Error - if there was any other problems
   */
  show: AbstractController.show.bind(this, Status),

  /**
   * PUT /api/v1/statuses/:id
   *
   * 200 OK                    - if Status was updated
   * 400 Bad Request           - if validation failed
   * 404 Not Found             - if Status was not found
   * 500 Internal Server Error - if there was any other problems
   */
  update: AbstractController.update.bind(this, Status),

  /**
   * DELETE /api/v1/statuses/:id
   *
   * 204 No Content            - if Status was destroyed
   * 404 Not Found             - if Status was not found
   * 500 Internal Server Error - if there was any other problems
   */
  destroy: AbstractController.destroy.bind(this, Status)
};
