var Sequelize = require('sequelize');
var _ = require('lodash');

var AbstractController = require('./_abstract-controller');
var models = require('../../models');
var Object = models['Object'];

module.exports = {
  before: AbstractController.before,

  /**
   * Find Object where id = req.params.id and store it to req.instance
   *
   * 404 Not Found             - if instance was not found
   * 500 Internal Server Error - if there was any other problems
   */
  findById: AbstractController.findById.bind(this, Object),

  /**
   * GET /api/v1/objects
   *
   * 200 OK                    - if there was no problems
   * 500 Internal Server Error - if there was any problems
   */
  index: AbstractController.index.bind(this, Object),

  /**
   * POST /api/v1/objects
   *
   * 201 Created with no content - if Object was created
   * - Location: url for the created Object
   * 400 Bad Request             - if validation failed
   * 500 Internal Server Error   - if there was any other problems
   */
  create: AbstractController.create.bind(this, Object),

  /**
   * GET /api/v1/objects/:id
   *
   * 200 OK                    - if Object was found
   * 404 Not Found             - if Object was not found
   * 500 Internal Server Error - if there was any other problems
   */
  show: AbstractController.show.bind(this, Object),

  /**
   * PUT /api/v1/objects/:id
   *
   * 200 OK                    - if Object was updated
   * 400 Bad Request           - if validation failed
   * 404 Not Found             - if Object was not found
   * 500 Internal Server Error - if there was any other problems
   */
  update: AbstractController.update.bind(this, Object),

  /**
   * DELETE /api/v1/objects/:id
   *
   * 204 No Content            - if Object was destroyed
   * 404 Not Found             - if Object was not found
   * 500 Internal Server Error - if there was any other problems
   */
  destroy: AbstractController.destroy.bind(this, Object)
};
