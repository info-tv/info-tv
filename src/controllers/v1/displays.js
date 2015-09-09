var Sequelize = require('sequelize');
var _ = require('lodash');

var AbstractController = require('./_abstract-controller');
var models = require('../../models');
var Display = models['Display'];

module.exports = {
  before: AbstractController.before,

  findById: AbstractController.findById.bind(this, Display),

  /**
   * @api {get} /api/v1/displays 1 - List displays
   * @apiName GetDisplays
   * @apiGroup Display
   * @apiVersion 0.1.0
   *
   * @apiSuccess (200) {Object[]} displays               List of displays
   * @apiSuccess (200) {Number}   displays.id            Display ID
   * @apiSuccess (200) {String}   [displays.name]        Display name
   * @apiSuccess (200) {String}   [displays.description] Display description
   * @apiSuccess (200) {String}   [displays.location]    Physical or logical location of the display
   * @apiSuccess (200) {Number}   [displays.width_mm=0]  Display width in millimetres
   * @apiSuccess (200) {Number}   [displays.height_mm=0] Display height in millimetres
   * @apiSuccess (200) {Number}   [displays.width_px=0]  Display width in pixels
   * @apiSuccess (200) {Number}   [displays.height_px=0] Display height in pixels
   * @apiSuccess (200) {Object}   [displays.x=0]         X coordinate (in pixels) of the top-left corner of the display in screen
   * @apiSuccess (200) {Object}   [displays.y=0]         Y coordinate (in pixels) of the top-left corner of the display in screen
   * @apiSuccess (200) {String}   displays.createdAt     Timestamp of creation in ISO format
   * @apiSuccess (200) {String}   displays.updatedAt     Timestamp of latest update in ISO format
   * @apiSuccess (200) {Number}   [displays.screenId]    Parent screen ID
   *
   * @apiSuccessExample {json} 200 OK
   *     HTTP/1.1 200 OK
   *     [
   *       {
   *         "id": 5,
   *         "name": "RPI3",
   *         "description": "Lorem ipsum dolor sit amet...",
   *         "location": "Stage D",
   *         "width_mm": 200,
   *         "height_mm": 113,
   *         "width_px": 1920,
   *         "height_px": 1080,
   *         "x": 0,
   *         "y": 0,
   *         "ssh": "ssh://192.168.4.15",
   *         "public_key": "ssh-rsa AAAAB3...YPkgJD pi@192.168.4.15",
   *         "createdAt": "2015-08-31T14:35:21.202Z",
   *         "updatedAt": "2015-08-31T14:35:21.202Z",
   *         "ScreenId": 3
   *       }
   *     ]
   *
   *
   * @apiUse 500InternalServerError
   */
  index: AbstractController.index.bind(this, Display),

  /**
   * @api {post} /api/v1/displays 2 - Create display
   * @apiName PostDisplays
   * @apiGroup Display
   * @apiVersion 0.1.0
   *
   * @apiParam {String} [name]        Display name
   * @apiParam {String} [description] Display description
   * @apiParam {String} [location]    Physical or logical location of the display
   * @apiParam {Number} [width_mm=0]  Display width in millimetres
   * @apiParam {Number} [height_mm=0] Display height in millimetres
   * @apiParam {Number} [width_px=0]  Display width in pixels
   * @apiParam {Number} [height_px=0] Display height in pixels
   * @apiParam {Object} [x=0]         X coordinate (in pixels) of the top-left corner of the display in screen
   * @apiParam {Object} [y=0]         Y coordinate (in pixels) of the top-left corner of the display in screen
   * @apiParam {Number} [ScreenId]    Parent screen ID
   *
   * @apiSuccess (201)  {Number} id   Display ID
   *
   * @apiSuccessExample {json} 201 Created
   *     POST /api/v1/displays HTTP/1.1
   *     {
   *       "name": "RPI5",
   *       "description": "Lorem ipsum dolor sit amet...",
   *       "location": "Stage D",
   *       "width_mm": 200,
   *       "height_mm": 113,
   *       "width_px": 1920,
   *       "height_px": 1080,
   *       "x": 0,
   *       "y": 0,
   *       "ssh": "ssh://192.168.4.15",
   *       "public_key": "ssh-rsa AAAAB3...YPkgJD pi@192.168.4.15",
   *       "ScreenId": 3
   *     }
   *
   *     HTTP/1.1 201 Created
   *     Location: /api/v1/displays/5
   *
   * @apiUse 400BadRequest
   * @apiUse 500InternalServerError
   */
  create: AbstractController.create.bind(this, Display),

  /**
   * @api {get} /api/v1/displays/:id 3 - Get display
   * @apiName GetDisplay
   * @apiGroup Display
   * @apiVersion 0.1.0
   *
   * @apiParam         {Number} id            Display ID
   *
   * @apiSuccess (200) {Number} id            Display ID
   * @apiSuccess (200) {String} [name]        Display name
   * @apiSuccess (200) {String} [description] Display description
   * @apiSuccess (200) {String} [location]    Physical or logical location of the display
   * @apiSuccess (200) {Number} [width_mm=0]  Display width in millimetres
   * @apiSuccess (200) {Number} [height_mm=0] Display height in millimetres
   * @apiSuccess (200) {Number} [width_px=0]  Display width in pixels
   * @apiSuccess (200) {Number} [height_px=0] Display height in pixels
   * @apiSuccess (200) {Object} [x=0]         X coordinate (in pixels) of the top-left corner of the display in screen
   * @apiSuccess (200) {Object} [y=0]         Y coordinate (in pixels) of the top-left corner of the display in screen
   * @apiSuccess (200) {String} createdAt     Timestamp of creation in ISO format
   * @apiSuccess (200) {String} updatedAt     Timestamp of latest update in ISO format
   * @apiSuccess (200) {Number} [ScreenId]    Parent screen ID
   *
   * @apiSuccessExample {json} 200 OK
   *     HTTP/1.1 200 OK
   *     {
   *       "id": 5,
   *       "name": "RPI3",
   *       "description": "Lorem ipsum dolor sit amet...",
   *       "location": "Stage D",
   *       "width_mm": 200,
   *       "height_mm": 113,
   *       "width_px": 1920,
   *       "height_px": 1080,
   *       "x": 0,
   *       "y": 0,
   *       "ssh": "ssh://192.168.4.15",
   *       "public_key": "ssh-rsa AAAAB3...YPkgJD pi@192.168.4.15",
   *       "createdAt": "2015-08-31T14:35:21.202Z",
   *       "updatedAt": "2015-08-31T14:35:21.202Z",
   *       "ScreenId": 3
   *     }
   *
   *
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  show: AbstractController.show.bind(this, Display),

  /**
   * @api {put} /api/v1/displays/:id 4 - Replace display
   * @apiName PutDisplay
   * @apiGroup Display
   * @apiVersion 0.1.0
   *
   * @apiParam {String} [name]        Display name
   * @apiParam {String} [description] Display description
   * @apiParam {String} [location]    Physical or logical location of the display
   * @apiParam {Number} [width_mm=0]  Display width in millimetres
   * @apiParam {Number} [height_mm=0] Display height in millimetres
   * @apiParam {Number} [width_px=0]  Display width in pixels
   * @apiParam {Number} [height_px=0] Display height in pixels
   * @apiParam {Object} [x=0]         X coordinate (in pixels) of the top-left corner of the display in screen
   * @apiParam {Object} [y=0]         Y coordinate (in pixels) of the top-left corner of the display in screen
   * @apiParam {Number} [ScreenId]    Parent screen ID
   *
   * @apiSuccess (200) {Number} id    Display ID
   *
   * @apiSuccessExample {json} 200 OK
   *     PUT /api/v1/displays/5 HTTP/1.1
   *     {
   *       "name": "RPI3",
   *       "description": "Lorem ipsum dolor sit amet...",
   *       "location": "Stage D",
   *       "width_mm": 200,
   *       "height_mm": 113,
   *       "width_px": 1920,
   *       "height_px": 1080,
   *       "x": 0,
   *       "y": 0,
   *       "ssh": "ssh://192.168.4.15",
   *       "public_key": "ssh-rsa AAAAB3...YPkgJD pi@192.168.4.15",
   *       "ScreenId": 3
   *     }
   *
   *     HTTP/1.1 200 OK
   *     {
   *       "id": 5,
   *       "name": "RPI3",
   *       "description": "Lorem ipsum dolor sit amet...",
   *       "location": "Stage D",
   *       "width_mm": 200,
   *       "height_mm": 113,
   *       "width_px": 1920,
   *       "height_px": 1080,
   *       "x": 0,
   *       "y": 0,
   *       "ssh": "ssh://192.168.4.15",
   *       "public_key": "ssh-rsa AAAAB3...YPkgJD pi@192.168.4.15",
   *       "createdAt": "2015-08-31T14:35:21.202Z",
   *       "updatedAt": "2015-08-31T14:35:21.202Z",
   *       "ScreenId": 3
   *     }
   *
   * @apiUse 400BadRequest
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  update: AbstractController.update.bind(this, Display),

  /**
   * @api {delete} /api/v1/displays/:id 5 - Delete display
   * @apiName DeleteDisplay
   * @apiGroup Display
   * @apiVersion 0.1.0
   *
   * @apiParam {Number} id Display ID
   *
   * @apiSuccess (2xx) 204 No Content
   *
   * @apiSuccessExample {json} 204 No Content
   *     HTTP/1.1 204 No Content
   *
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  destroy: AbstractController.destroy.bind(this, Display)
};
