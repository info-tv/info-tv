var Sequelize = require('sequelize');
var _ = require('lodash');

var AbstractController = require('./_abstract-controller');
var models = require('../../models');
var Channel = models['Channel'];

module.exports = {
  before: AbstractController.before,

  findById: AbstractController.findById.bind(this, Channel),

  /**
   * @api {get} /api/v1/channels 1 - List channels
   * @apiName GetChannels
   * @apiGroup Channel
   * @apiVersion 0.1.0
   *
   * @apiDescription Channel is like all channels in TV. Every channel have
   * their own layout and content flow and if screen is showing one channel in
   * one moment and then changes it to another, it is showing the second channel
   * which can be very different than the previous one.
   *
   * @apiSuccess (200) {Object[]} channels               List of channels
   * @apiSuccess (200) {Number}   channels.ObjectId      Object id of channel
   * @apiSuccess (200) {Number}   channels.id            Channel ID
   * @apiSuccess (200) {String}   [channels.name]        Channel name
   * @apiSuccess (200) {String}   [channels.description] Channel description
   * @apiSuccess (200) {String}   [channels.location]    Physical or logical location of the channel
   * @apiSuccess (200) {Object}   [channels.layout={}]   Layout and style of the channel in String/JSON format
   * @apiSuccess (200) {String}   channels.createdAt     Timestamp of creation in ISO format
   * @apiSuccess (200) {String}   channels.updatedAt     Timestamp of latest update in ISO format
   *
   * @apiSuccessExample {json} 200 OK
   *     HTTP/1.1 200 OK
   *     [
   *       {
   *         "ObjectId": 4,
   *         "id": 3,
   *         "name": "MWC-16",
   *         "description": "Mobile World Conference 2016",
   *         "location": "Barcelona",
   *         "layout": {},
   *         "createdAt": "2015-08-31T14:35:21.202Z",
   *         "updatedAt": "2015-08-31T14:35:21.202Z"
   *       }
   *     ]
   *
   * @apiUse 500InternalServerError
   */
  index: AbstractController.index.bind(this, Channel),

  /**
   * @api {post} /api/v1/channels 2 - Create channel
   * @apiName PostChannels
   * @apiGroup Channel
   * @apiVersion 0.1.0
   *
   * @apiParam {String} [name]        Channel name
   * @apiParam {String} [description] Channel description
   * @apiParam {String} [location]    Physical or logical location of the channel
   * @apiParam {Object} [layout={}]   Layout and style of the channel in String/JSON format
   *
   * @apiSuccess (201)  {Number} id   Channel ID
   *
   * @apiSuccessExample {json} 201 Created
   *     POST /api/v1/channels HTTP/1.1
   *     {
   *       "name": "MWC-2016",
   *       "description": "Mobile World Conference 2016",
   *       "location": "Barcelona",
   *       "layout": {}
   *     }
   *
   *     HTTP/1.1 201 Created
   *     Location: /api/v1/channels/3
   *
   * @apiUse 400BadRequest
   * @apiUse 500InternalServerError
   */
  create: AbstractController.create.bind(this, Channel),

  /**
   * @api {get} /api/v1/channels/:id 3 - Get channel
   * @apiName GetChannel
   * @apiGroup Channel
   * @apiVersion 0.1.0
   *
   * @apiParam         {Number} id            Channel ID
   *
   * @apiSuccess (200) {Number} ObjectId      Object id of channel
   * @apiSuccess (200) {Number} id            Channel ID
   * @apiSuccess (200) {String} [name]        Channel name
   * @apiSuccess (200) {String} [description] Channel description
   * @apiSuccess (200) {String} [location]    Physical or logical location of the channel
   * @apiSuccess (200) {Object} [layout={}]   Layout and style of the channel in String/JSON format
   * @apiSuccess (200) {String} createdAt     Timestamp of creation in ISO format
   * @apiSuccess (200) {String} updatedAt     Timestamp of latest update in ISO format
   *
   * @apiSuccessExample {json} 200 OK
   *     HTTP/1.1 200 OK
   *     {
   *       "ObjectId": 4,
   *       "id": 3,
   *       "name": "MWC-16",
   *       "description": "Mobile World Conference 2016",
   *       "location": "Barcelona",
   *       "layout": {},
   *       "createdAt": "2015-08-31T14:35:21.202Z",
   *       "updatedAt": "2015-08-31T14:35:21.202Z"
   *     }
   *
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  show: AbstractController.show.bind(this, Channel),

  /**
   * @api {put} /api/v1/channels/:id 4 - Replace channel
   * @apiName PutChannel
   * @apiGroup Channel
   * @apiVersion 0.1.0
   *
   * @apiParam {String} [name]        Channel name
   * @apiParam {String} [description] Channel description
   * @apiParam {String} [location]    Physical or logical location of the channel
   * @apiParam {Object} [layout={}]   Layout and style of the channel in String/JSON format
   *
   * @apiSuccess (200) {Number} id    Channel ID
   *
   * @apiSuccessExample {json} 201 OK
   *     PUT /api/v1/channels/3 HTTP/1.1
   *     {
   *       "name": "MWC-16",
   *       "description": "Mobile World Conference 2016",
   *       "location": "Barcelona",
   *       "layout": {}
   *     }
   *
   *     HTTP/1.1 200 OK
   *     {
   *       "ObjectId": 4,
   *       "id": 3,
   *       "name": "MWC-16",
   *       "description": "Mobile World Conference 2016",
   *       "location": "Barcelona",
   *       "layout": {},
   *       "createdAt": "2015-08-31T14:35:21.202Z",
   *       "updatedAt": "2015-08-31T14:35:21.202Z"
   *     }
   *
   * @apiUse 400BadRequest
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  update: AbstractController.update.bind(this, Channel),

  /**
   * @api {delete} /api/v1/channels/:id 5 - Delete channel
   * @apiName DeleteChannel
   * @apiGroup Channel
   * @apiVersion 0.1.0
   *
   * @apiParam {Number} id Channel ID
   *
   * @apiSuccess (2xx) 204 No Content
   *
   * @apiSuccessExample {json} 204 No Content
   *     HTTP/1.1 204 No Content
   *
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  destroy: AbstractController.destroy.bind(this, Channel)
};
