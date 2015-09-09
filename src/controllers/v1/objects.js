var Sequelize = require('sequelize');
var _ = require('lodash');

var AbstractController = require('./_abstract-controller');
var models = require('../../models');
var Object = models['Object'];

module.exports = {
  before: AbstractController.before,

  findById: AbstractController.findById.bind(this, Object),

  /**
   * @api {get} /api/v1/objects 1 - List objects
   * @apiName GetObjects
   * @apiGroup Object
   * @apiVersion 0.1.0
   *
   * @apiSuccess (200) {Object[]} objects           List of objects
   * @apiSuccess (200) {Number}   objects.id        Object ID
   * @apiSuccess (200) {String}   objects.kind      Table name of the real object
   * @apiSuccess (200) {String}   objects.createdAt Timestamp of creation in ISO format
   * @apiSuccess (200) {String}   objects.updatedAt Timestamp of latest update in ISO format
   *
   * @apiSuccessExample {json} 200 OK
   *     HTTP/1.1 200 OK
   *     [
   *       {
   *         "id": 18,
   *         "kind": "Content",
   *         "createdAt": "2015-08-31T14:35:21.202Z",
   *         "updatedAt": "2015-08-31T14:35:21.202Z"
   *       }
   *     ]
   *
   *
   * @apiUse 500InternalServerError
   */
  index: AbstractController.index.bind(this, Object),

  /**
   * @api {get} /api/v1/objects/:id 2 - Get object
   * @apiName GetObject
   * @apiGroup Object
   * @apiVersion 0.1.0
   *
   * @apiParam         {Number} id        Object ID
   *
   * @apiSuccess (200) {Number} id        Object ID
   * @apiSuccess (200) {String} kind      Table name of the real object
   * @apiSuccess (200) {String} createdAt Timestamp of creation in ISO format
   * @apiSuccess (200) {String} updatedAt Timestamp of latest update in ISO format
   *
   * @apiSuccessExample {json} 200 OK
   *     HTTP/1.1 200 OK
   *     {
   *       "id": 18,
   *       "kind": "Content",
   *       "createdAt": "2015-08-31T14:35:21.202Z",
   *       "updatedAt": "2015-08-31T14:35:21.202Z"
   *     }
   *
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  show: AbstractController.show.bind(this, Object),

  /**
   * @api {delete} /api/v1/objects/:id 3 - Delete object
   * @apiName DeleteObject
   * @apiGroup Object
   * @apiVersion 0.1.0
   *
   * @apiParam {Number} id Object ID
   *
   * @apiSuccess (2xx) 204 No Object
   *
   * @apiSuccessExample {json} 204 No Object
   *     HTTP/1.1 204 No Object
   *
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  destroy: AbstractController.destroy.bind(this, Object)
};
