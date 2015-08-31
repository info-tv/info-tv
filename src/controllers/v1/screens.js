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
   * @api {get} /api/v1/screens List screens
   * @apiName GetScreens
   * @apiGroup Screen
   *
   * @apiSuccess {Object[]} screens                  List of screens
   * @apiSuccess {Number}   screens.ObjectId         Object id of screen
   * @apiSuccess {Number}   screens.id               id
   * @apiSuccess {String}   [screens.name=""]        name
   * @apiSuccess {String}   [screens.description=""] description
   * @apiSuccess {String}   [screens.location=""]    physical or logical location
   * @apiSuccess {Number}   [screens.width_mm=0]     width in millimetres
   * @apiSuccess {Number}   [screens.height_mm=0]    height in millimetres
   * @apiSuccess {Number}   [screens.width_px=0]     width in pixels
   * @apiSuccess {Number}   [screens.height_px=0]    height in pixels
   * @apiSuccess {Object}   [screens.layout={}]      layout and style in String/JSON
   * @apiSuccess {String}   screens.createdAt        timestamp of creation in ISO format
   * @apiSuccess {String}   screens.updatedAt        timestamp of latest update in ISO format
   *
   * @apiSuccessExample {json}
   *     HTTP/1.1 200 OK
   *     [
   *       {
   *         "ObjectId": 12,
   *         "id": 3,
   *         "width_mm": 200,
   *         "height_mm": 113,
   *         "width_px": 1920,
   *         "height_px": 1080,
   *         "name": "SD3",
   *         "description": "Lorem ipsum dolor sit amet...",
   *         "location": "Stage D",
   *         "layout": {},
   *         "createdAt": "2015-08-31T14:35:21.202Z",
   *         "updatedAt": "2015-08-31T14:35:21.202Z"
   *       }
   *     ]
   *
   *
   * @apiError (500) InternalServerError
   *
   * @apiErrorExample {json}
   *     HTTP/1.1 500 Internal Server Error
   *     {
   *       "code": "InternalError",
   *       "message": "Not so useful error message"
   *     }
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
