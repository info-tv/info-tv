var Sequelize = require('sequelize');
var _ = require('lodash');

var AbstractController = require('./_abstract-controller');
var models = require('../../models');
var Screen = models['Screen'];

module.exports = {
  before: AbstractController.before,

  findById: AbstractController.findById.bind(this, Screen),

  /**
   * @api {get} /api/v1/screens 1 - List screens
   * @apiName GetScreens
   * @apiGroup Screen
   * @apiVersion 0.1.0
   *
   * @apiDescription Screen is an virtual screen. It contains one or more
   * physical displays (video walls have many displays). Screen have its own
   * layout and style which is usually overridden by layout and style of
   * channels whom it usually shows. In a rare cases, a screen can also show
   * content even if it is not showing in any channel. This is, for example, for
   * emergency notifications.
   *
   * @apiSuccess (200) {Object[]} screens               List of screens
   * @apiSuccess (200) {Number}   screens.ObjectId      Object id of screen
   * @apiSuccess (200) {Number}   screens.id            Screen ID
   * @apiSuccess (200) {String}   [screens.name]        Screen name
   * @apiSuccess (200) {String}   [screens.description] Screen description
   * @apiSuccess (200) {String}   [screens.location]    Physical or logical location of the screen
   * @apiSuccess (200) {Number}   [screens.width_mm=0]  Screen width in millimetres
   * @apiSuccess (200) {Number}   [screens.height_mm=0] Screen height in millimetres
   * @apiSuccess (200) {Number}   [screens.width_px=0]  Screen width in pixels
   * @apiSuccess (200) {Number}   [screens.height_px=0] Screen height in pixels
   * @apiSuccess (200) {Object}   [screens.layout={}]   Layout and style of the screen in String/JSON format
   * @apiSuccess (200) {String}   screens.createdAt     Timestamp of creation in ISO format
   * @apiSuccess (200) {String}   screens.updatedAt     Timestamp of latest update in ISO format
   *
   * @apiSuccessExample {json} 200 OK
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
   * @apiUse 500InternalServerError
   */
  index: AbstractController.index.bind(this, Screen),

  /**
   * @api {post} /api/v1/screens 2 - Create screen
   * @apiName PostScreens
   * @apiGroup Screen
   * @apiVersion 0.1.0
   *
   * @apiParam {String} [name]        Screen name
   * @apiParam {String} [description] Screen description
   * @apiParam {String} [location]    Physical or logical location of the screen
   * @apiParam {Number} [width_mm=0]  Screen width in millimetres
   * @apiParam {Number} [height_mm=0] Screen height in millimetres
   * @apiParam {Number} [width_px=0]  Screen width in pixels
   * @apiParam {Number} [height_px=0] Screen height in pixels
   * @apiParam {Object} [layout={}]   Layout and style of the screen in String/JSON format
   *
   * @apiSuccess (201)  {Number} id   Screen ID
   *
   * @apiSuccessExample {json} 201 Created
   *     POST /api/v1/screens HTTP/1.1
   *     {
   *       "width_mm": 200,
   *       "height_mm": 113,
   *       "width_px": 1920,
   *       "height_px": 1080,
   *       "name": "SD3",
   *       "description": "Lorem ipsum dolor sit amet...",
   *       "location": "Stage D",
   *       "layout": {}
   *     }
   *
   *     HTTP/1.1 201 Created
   *     Location: /api/v1/screens/3
   *
   * @apiUse 400BadRequest
   * @apiUse 500InternalServerError
   */
  create: AbstractController.create.bind(this, Screen),

  /**
   * @api {get} /api/v1/screens/:id 3 - Get screen
   * @apiName GetScreen
   * @apiGroup Screen
   * @apiVersion 0.1.0
   *
   * @apiParam         {Number} id            Screen ID
   *
   * @apiSuccess (200) {Number} ObjectId      Object id of screen
   * @apiSuccess (200) {Number} id            Screen ID
   * @apiSuccess (200) {String} [name]        Screen name
   * @apiSuccess (200) {String} [description] Screen description
   * @apiSuccess (200) {String} [location]    Physical or logical location of the screen
   * @apiSuccess (200) {Number} [width_mm=0]  Screen width in millimetres
   * @apiSuccess (200) {Number} [height_mm=0] Screen height in millimetres
   * @apiSuccess (200) {Number} [width_px=0]  Screen width in pixels
   * @apiSuccess (200) {Number} [height_px=0] Screen height in pixels
   * @apiSuccess (200) {Object} [layout={}]   Layout and style of the screen in String/JSON format
   * @apiSuccess (200) {String} createdAt     Timestamp of creation in ISO format
   * @apiSuccess (200) {String} updatedAt     Timestamp of latest update in ISO format
   *
   * @apiSuccessExample {json} 200 OK
   *     HTTP/1.1 200 OK
   *     {
   *       "ObjectId": 12,
   *       "id": 3,
   *       "width_mm": 200,
   *       "height_mm": 113,
   *       "width_px": 1920,
   *       "height_px": 1080,
   *       "name": "SD3",
   *       "description": "Lorem ipsum dolor sit amet...",
   *       "location": "Stage D",
   *       "layout": {},
   *       "createdAt": "2015-08-31T14:35:21.202Z",
   *       "updatedAt": "2015-08-31T14:35:21.202Z"
   *     }
   *
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  show: AbstractController.show.bind(this, Screen),

  /**
   * @api {put} /api/v1/screens/:id 4 - Replace screen
   * @apiName PutScreen
   * @apiGroup Screen
   * @apiVersion 0.1.0
   *
   * @apiParam {String} [name]        Screen name
   * @apiParam {String} [description] Screen description
   * @apiParam {String} [location]    Physical or logical location of the screen
   * @apiParam {Number} [width_mm=0]  Screen width in millimetres
   * @apiParam {Number} [height_mm=0] Screen height in millimetres
   * @apiParam {Number} [width_px=0]  Screen width in pixels
   * @apiParam {Number} [height_px=0] Screen height in pixels
   * @apiParam {Object} [layout={}]   Layout and style of the screen in String/JSON format
   *
   * @apiSuccess (200) {Number} id    Screen ID
   *
   * @apiSuccessExample {json} 201 OK
   *     PUT /api/v1/screens/3 HTTP/1.1
   *     {
   *       "width_mm": 200,
   *       "height_mm": 113,
   *       "width_px": 1920,
   *       "height_px": 1080,
   *       "name": "SD3",
   *       "description": "Lorem ipsum dolor sit amet...",
   *       "location": "Stage D",
   *       "layout": {}
   *     }
   *
   *     HTTP/1.1 200 OK
   *     {
   *       "ObjectId": 12,
   *       "id": 3,
   *       "width_mm": 200,
   *       "height_mm": 113,
   *       "width_px": 1920,
   *       "height_px": 1080,
   *       "name": "SD3",
   *       "description": "Lorem ipsum dolor sit amet...",
   *       "location": "Stage D",
   *       "layout": {},
   *       "createdAt": "2015-08-31T14:35:21.202Z",
   *       "updatedAt": "2015-08-31T14:35:21.202Z"
   *     }
   *
   * @apiUse 400BadRequest
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  update: AbstractController.update.bind(this, Screen),

  /**
   * @api {delete} /api/v1/screens/:id 5 - Delete screen
   * @apiName DeleteScreen
   * @apiGroup Screen
   * @apiVersion 0.1.0
   *
   * @apiParam {Number} id Screen ID
   *
   * @apiSuccess (2xx) 204 No Content
   *
   * @apiSuccessExample {json} 204 No Content
   *     HTTP/1.1 204 No Content
   *
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  destroy: AbstractController.destroy.bind(this, Screen)
};
