var Sequelize = require('sequelize');
var _ = require('lodash');

var AbstractController = require('./_abstract-controller');
var models = require('../../models');
var Situation = models['Situation'];

module.exports = {
  before: AbstractController.before,

  findById: AbstractController.findById.bind(this, Situation),

  /**
   * @api {get} /api/v1/situations 1 - List situations
   * @apiName GetSituations
   * @apiGroup Situation
   * @apiVersion 0.1.0
   *
   * @apiSuccess (200) {Object[]} situations                List of situations
   * @apiSuccess (200) {Number}   situations.id             Situation ID
   * @apiSuccess (200) {JSON}     [situations.condition]    Evaluable condition expression
   * @apiSuccess (200) {Number}   [situations.priority]     Priority
   * @apiSuccess (200) {Number}   [situations.showing_time] Showing time in milliseconds
   * @apiSuccess (200) {String}   situations.createdAt      Timestamp of creation in ISO format
   * @apiSuccess (200) {String}   situations.updatedAt      Timestamp of latest update in ISO format
   * @apiSuccess (200) {Number}   [situations.ContainerId]  Container object ID
   * @apiSuccess (200) {Number}   [situations.ItemId]       Item object ID
   *
   * @apiSuccessExample {json} 200 OK
   *     HTTP/1.1 200 OK
   *     [
   *       {
   *         "id": 5,
   *         "condition": {},
   *         "priority": 0.0,
   *         "showing_time": 30000.0
   *         "createdAt": "2015-08-31T14:35:21.202Z",
   *         "updatedAt": "2015-08-31T14:35:21.202Z",
   *         "ContainerId": 3,
   *         "ItemId": 4
   *       }
   *     ]
   *
   *
   * @apiUse 500InternalServerError
   */
  index: AbstractController.index.bind(this, Situation),

  /**
   * @api {post} /api/v1/situations 2 - Create situation
   * @apiName PostSituations
   * @apiGroup Situation
   * @apiVersion 0.1.0
   *
   * @apiParam {String} id             Situation ID
   * @apiParam {Number} [condition]    Evaluable condition expression
   * @apiParam {Number} [priority]     Priority
   * @apiParam {Number} [showing_time] Showing time in milliseconds
   * @apiParam {Number} createdAt      Timestamp of creation in ISO format
   * @apiParam {Number} updatedAt      Timestamp of latest update in ISO format
   * @apiParam {Number} [ContainerId]  Container object ID
   * @apiParam {Number} [ItemId]       Item object ID
   *
   * @apiSuccess (201)  {Number} id    Situation ID
   *
   * @apiSuccessExample {json} 201 Created
   *     POST /api/v1/situations HTTP/1.1
   *     {
   *       "condition": {},
   *       "priority": 0.0,
   *       "showing_time": 30000.0,
   *       "ContainerId": 3,
   *       "ItemId": 4
   *     }
   *
   *     HTTP/1.1 201 Created
   *     Location: /api/v1/situations/5
   *
   * @apiUse 400BadRequest
   * @apiUse 500InternalServerError
   */
  create: AbstractController.create.bind(this, Situation),

  /**
   * @api {get} /api/v1/situations/:id 3 - Get situation
   * @apiName GetSituation
   * @apiGroup Situation
   * @apiVersion 0.1.0
   *
   * @apiParam         {Number} id             Situation ID
   *
   * @apiSuccess (200) {Number} id             Situation ID
   * @apiSuccess (200) {JSON}   [condition]    Evaluable condition expression
   * @apiSuccess (200) {Number} [priority]     Priority
   * @apiSuccess (200) {Number} [showing_time] Showing time in milliseconds
   * @apiSuccess (200) {String} createdAt      Timestamp of creation in ISO format
   * @apiSuccess (200) {String} updatedAt      Timestamp of latest update in ISO format
   * @apiSuccess (200) {Number} [ContainerId]  Container object ID
   * @apiSuccess (200) {Number} [ItemId]       Item object ID
   *
   * @apiSuccessExample {json} 200 OK
   *     HTTP/1.1 200 OK
   *     {
   *       "id": 5,
   *       "condition": {},
   *       "priority": 0.0,
   *       "showing_time": 30000.0
   *       "createdAt": "2015-08-31T14:35:21.202Z",
   *       "updatedAt": "2015-08-31T14:35:21.202Z",
   *       "ContainerId": 3,
   *       "ItemId": 4
   *     }
   *
   *
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  show: AbstractController.show.bind(this, Situation),

  /**
   * @api {put} /api/v1/situations/:id 4 - Replace situation
   * @apiName PutSituation
   * @apiGroup Situation
   * @apiVersion 0.1.0
   *
   * @apiParam {String} id             Situation ID
   * @apiParam {Number} [condition]    Evaluable condition expression
   * @apiParam {Number} [priority]     Priority
   * @apiParam {Number} [showing_time] Showing time in milliseconds
   * @apiParam {Number} createdAt      Timestamp of creation in ISO format
   * @apiParam {Number} updatedAt      Timestamp of latest update in ISO format
   * @apiParam {Number} [ContainerId]  Container object ID
   * @apiParam {Number} [ItemId]       Item object ID
   *
   * @apiSuccess (200) {Number} id  Display ID
   *
   * @apiSuccessExample {json} 200 OK
   *     PUT /api/v1/displays/5 HTTP/1.1
   *     {
   *       "condition": {},
   *       "priority": 0.0,
   *       "showing_time": 30000.0,
   *       "ContainerId": 3,
   *       "ItemId": 4
   *     }
   *
   *     HTTP/1.1 200 OK
   *     {
   *       "id": 5,
   *       "condition": {},
   *       "priority": 0.0,
   *       "showing_time": 30000.0
   *       "createdAt": "2015-08-31T14:35:21.202Z",
   *       "updatedAt": "2015-08-31T14:35:21.202Z",
   *       "ContainerId": 3,
   *       "ItemId": 4
   *     }
   *
   * @apiUse 400BadRequest
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  update: AbstractController.update.bind(this, Situation),

  /**
   * @api {delete} /api/v1/situations/:id 5 - Delete situation
   * @apiName DeleteSituation
   * @apiGroup Situation
   * @apiVersion 0.1.0
   *
   * @apiParam {Number} id Situation ID
   *
   * @apiSuccess (2xx) 204 No Content
   *
   * @apiSuccessExample {json} 204 No Content
   *     HTTP/1.1 204 No Content
   *
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  destroy: AbstractController.destroy.bind(this, Situation)
};
