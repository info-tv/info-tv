var Sequelize = require('sequelize');
var _ = require('lodash');

var AbstractController = require('./_abstract-controller');
var models = require('../../models');
var Status = models['Status'];

module.exports = {
  before: AbstractController.before,

  findById: AbstractController.findById.bind(this, Status),

  /**
   * @api {get} /api/v1/statuses 1 - List statuses
   * @apiName GetStatuses
   * @apiGroup Status
   * @apiVersion 0.1.0
   *
   * @apiSuccess (200) {Object[]} statuses             List of statuses
   * @apiSuccess (200) {Number}   statuses.id          Status ID
   * @apiSuccess (200) {String}   [statuses.status]    New status
   * @apiSuccess (200) {String}   [statuses.comment]   Administrator's comment
   * @apiSuccess (200) {String}   statuses.createdAt   Timestamp of creation in ISO format
   * @apiSuccess (200) {String}   statuses.updatedAt   Timestamp of latest update in ISO format
   * @apiSuccess (200) {Number}   [statuses.DisplayId] Parent display ID
   *
   * @apiSuccessExample {json} 200 OK
   *     HTTP/1.1 200 OK
   *     [
   *       {
   *         "id": 5,
   *         "status": "OK",
   *         "comment": "",
   *         "createdAt": "2015-08-31T14:35:21.202Z",
   *         "updatedAt": "2015-08-31T14:35:21.202Z",
   *         "DisplayId": 3
   *       }
   *     ]
   *
   *
   * @apiUse 500InternalServerError
   */
  index: AbstractController.index.bind(this, Status),

  /**
   * @api {post} /api/v1/statuses 2 - Create status
   * @apiName PostStatuses
   * @apiGroup Status
   * @apiVersion 0.1.0
   *
   * @apiParam {String} [status]    New status
   * @apiParam {String} [comment]   Administrator's comment
   * @apiParam {Number} [DisplayId] Parent display ID
   *
   * @apiSuccess (201)  {Number} id Status ID
   *
   * @apiSuccessExample {json} 201 Created
   *     POST /api/v1/statuses HTTP/1.1
   *     {
   *       "status": "OK",
   *       "comment": "",
   *       "DisplayId": 3
   *     }
   *
   *     HTTP/1.1 201 Created
   *     Location: /api/v1/statuses/5
   *
   * @apiUse 400BadRequest
   * @apiUse 500InternalServerError
   */
  create: AbstractController.create.bind(this, Status),

  /**
   * @api {get} /api/v1/statuses/:id 3 - Get status
   * @apiName GetStatus
   * @apiGroup Status
   * @apiVersion 0.1.0
   *
   * @apiParam         {Number} id          Status ID
   *
   * @apiSuccess (200) {Number} id          Status ID
   * @apiSuccess (200) {String} [status]    New status
   * @apiSuccess (200) {String} [comment]   Administrator's comment
   * @apiSuccess (200) {String} createdAt   Timestamp of creation in ISO format
   * @apiSuccess (200) {String} updatedAt   Timestamp of latest update in ISO format
   * @apiSuccess (200) {Number} [DisplayId] Parent display ID
   *
   * @apiSuccessExample {json} 200 OK
   *     HTTP/1.1 200 OK
   *     {
   *       "id": 5,
   *       "status": "OK",
   *       "comment": "",
   *       "createdAt": "2015-08-31T14:35:21.202Z",
   *       "updatedAt": "2015-08-31T14:35:21.202Z",
   *       "DisplayId": 3
   *     }
   *
   *
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  show: AbstractController.show.bind(this, Status),

  /**
   * @api {put} /api/v1/statuses/:id 4 - Replace status
   * @apiName PutStatus
   * @apiGroup Status
   * @apiVersion 0.1.0
   *
   * @apiParam {String} [status]    New status
   * @apiParam {String} [comment]   Administrator's comment
   * @apiParam {Number} [DisplayId] Parent display ID
   *
   * @apiSuccess (200) {Number} id  Display ID
   *
   * @apiSuccessExample {json} 200 OK
   *     PUT /api/v1/displays/5 HTTP/1.1
   *     {
   *       "status": "OK",
   *       "comment": "",
   *       "DisplayId": 3
   *     }
   *
   *     HTTP/1.1 200 OK
   *     {
   *       "id": 5,
   *       "status": "OK",
   *       "comment": "",
   *       "createdAt": "2015-08-31T14:35:21.202Z",
   *       "updatedAt": "2015-08-31T14:35:21.202Z",
   *       "DisplayId": 3
   *     }
   *
   * @apiUse 400BadRequest
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  update: AbstractController.update.bind(this, Status),

  /**
   * @api {delete} /api/v1/statuses/:id 5 - Delete status
   * @apiName DeleteStatus
   * @apiGroup Status
   * @apiVersion 0.1.0
   *
   * @apiParam {Number} id Status ID
   *
   * @apiSuccess (2xx) 204 No Content
   *
   * @apiSuccessExample {json} 204 No Content
   *     HTTP/1.1 204 No Content
   *
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  destroy: AbstractController.destroy.bind(this, Status)
};
