var Sequelize = require('sequelize');
var _ = require('lodash');

var AbstractController = require('./_abstract-controller');
var models = require('../../models');
var Content = models['Content'];

module.exports = {
  before: AbstractController.before,

  /**
   * Find Content where id = req.params.id and store it to req.instance
   *
   * 404 Not Found             - if instance was not found
   * 500 Internal Server Error - if there was any other problems
   */
  findById: AbstractController.findById.bind(this, Content),

  /**
   * GET /api/v1/contents
   *
   * 200 OK                    - if there was no problems
   * 500 Internal Server Error - if there was any problems
   */
  index: AbstractController.index.bind(this, Content),

  /**
   * POST /api/v1/contents
   *
   * 201 Created with no content - if Content was created
   * - Location: url for the created Content
   * 400 Bad Request             - if validation failed
   * 500 Internal Server Error   - if there was any other problems
   */
  create: AbstractController.create.bind(this, Content),

  /**
   * GET /api/v1/contents/:id
   *
   * 200 OK                    - if Content was found
   * 404 Not Found             - if Content was not found
   * 500 Internal Server Error - if there was any other problems
   */
  show: AbstractController.show.bind(this, Content),

  /**
   * PUT /api/v1/contents/:id
   *
   * 200 OK                    - if Content was updated
   * 400 Bad Request           - if validation failed
   * 404 Not Found             - if Content was not found
   * 500 Internal Server Error - if there was any other problems
   */
  update: AbstractController.update.bind(this, Content),

  /**
   * DELETE /api/v1/contents/:id
   *
   * 204 No Content            - if Content was destroyed
   * 404 Not Found             - if Content was not found
   * 500 Internal Server Error - if there was any other problems
   */
  destroy: AbstractController.destroy.bind(this, Content)
};
