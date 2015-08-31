var Sequelize = require('sequelize');
var _ = require('lodash');

var AbstractController = require('./_abstract-controller');
var models = require('../../models');
var Situation = models['Situation'];

module.exports = {
  before: AbstractController.before,

  /**
   * Find Situation where id = req.params.id and store it to req.instance
   *
   * 404 Not Found             - if instance was not found
   * 500 Internal Server Error - if there was any other problems
   */
  findById: AbstractController.findById.bind(this, Situation),

  /**
   * GET /api/v1/situations
   *
   * 200 OK                    - if there was no problems
   * 500 Internal Server Error - if there was any problems
   */
  index: AbstractController.index.bind(this, Situation),

  /**
   * POST /api/v1/situations
   *
   * 201 Created with no content - if Situation was created
   * - Location: url for the created Situation
   * 400 Bad Request             - if validation failed
   * 500 Internal Server Error   - if there was any other problems
   */
  create: AbstractController.create.bind(this, Situation),

  /**
   * GET /api/v1/situations/:id
   *
   * 200 OK                    - if Situation was found
   * 404 Not Found             - if Situation was not found
   * 500 Internal Server Error - if there was any other problems
   */
  show: AbstractController.show.bind(this, Situation),

  /**
   * PUT /api/v1/situations/:id
   *
   * 200 OK                    - if Situation was updated
   * 400 Bad Request           - if validation failed
   * 404 Not Found             - if Situation was not found
   * 500 Internal Server Error - if there was any other problems
   */
  update: AbstractController.update.bind(this, Situation),

  /**
   * DELETE /api/v1/situations/:id
   *
   * 204 No Content            - if Situation was destroyed
   * 404 Not Found             - if Situation was not found
   * 500 Internal Server Error - if there was any other problems
   */
  destroy: AbstractController.destroy.bind(this, Situation)
};
