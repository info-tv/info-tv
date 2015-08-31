var Sequelize = require('sequelize');
var _ = require('lodash');

var AbstractController = require('./_abstract-controller');
var models = require('../../models');
var ObjectGroup = models['ObjectGroup'];

module.exports = {
  before: AbstractController.before,

  /**
   * Find ObjectGroup where id = req.params.id and store it to req.instance
   *
   * 404 Not Found             - if instance was not found
   * 500 Internal Server Error - if there was any other problems
   */
  findById: AbstractController.findById.bind(this, ObjectGroup),

  /**
   * GET /api/v1/object-groups
   *
   * 200 OK                    - if there was no problems
   * 500 Internal Server Error - if there was any problems
   */
  index: AbstractController.index.bind(this, ObjectGroup),

  /**
   * POST /api/v1/object-groups
   *
   * 201 Created with no content - if ObjectGroup was created
   * - Location: url for the created ObjectGroup
   * 400 Bad Request             - if validation failed
   * 500 Internal Server Error   - if there was any other problems
   */
  create: AbstractController.create.bind(this, ObjectGroup),

  /**
   * GET /api/v1/object-groups/:id
   *
   * 200 OK                    - if ObjectGroup was found
   * 404 Not Found             - if ObjectGroup was not found
   * 500 Internal Server Error - if there was any other problems
   */
  show: AbstractController.show.bind(this, ObjectGroup),

  /**
   * PUT /api/v1/object-groups/:id
   *
   * 200 OK                    - if ObjectGroup was updated
   * 400 Bad Request           - if validation failed
   * 404 Not Found             - if ObjectGroup was not found
   * 500 Internal Server Error - if there was any other problems
   */
  update: AbstractController.update.bind(this, ObjectGroup),

  /**
   * DELETE /api/v1/object-groups/:id
   *
   * 204 No Content            - if ObjectGroup was destroyed
   * 404 Not Found             - if ObjectGroup was not found
   * 500 Internal Server Error - if there was any other problems
   */
  destroy: AbstractController.destroy.bind(this, ObjectGroup)
};
