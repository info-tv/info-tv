var AbstractController = require('./_abstract-controller');
var models = require('../../models');
var ObjectGroup = models.ObjectGroup;

module.exports = {
  before: AbstractController.before,

  findById: AbstractController.findById.bind(this, ObjectGroup),

  /**
   * @api {get} /api/v1/object-groups 1 - List object groups
   * @apiName GetObjectGroups
   * @apiGroup Object Group
   * @apiVersion 0.1.0
   *
   * @apiDescription Any objects can be grouped, and these groups can be
   * grouped. For example, there can be group of contents in a same field and
   * then the group is shown in a channel. The result is that all contents in
   * that group are shown in the channel.
   *
   * @apiSuccess (200) {Object[]} object-groups               List of object groups
   * @apiSuccess (200) {Number}   object-groups.ObjectId      Object id of object group
   * @apiSuccess (200) {Number}   object-groups.id            Object group ID
   * @apiSuccess (200) {String}   [object-groups.name]        Object group name
   * @apiSuccess (200) {String}   [object-groups.description] Object group description
   * @apiSuccess (200) {String}   [object-groups.location]    Physical or logical location of the object group
   * @apiSuccess (200) {String}   object-groups.createdAt     Timestamp of creation in ISO format
   * @apiSuccess (200) {String}   object-groups.updatedAt     Timestamp of latest update in ISO format
   *
   * @apiSuccessExample {json} 200 OK
   *     HTTP/1.1 200 OK
   *     [
   *       {
   *         "ObjectId": 13,
   *         "id": 3,
   *         "name": "Spanish",
   *         "description": "Spanish channels",
   *         "location": "Spain",
   *         "createdAt": "2015-08-31T14:35:21.202Z",
   *         "updatedAt": "2015-08-31T14:35:21.202Z"
   *       }
   *     ]
   *
   * @apiUse 500InternalServerError
   */
  index: AbstractController.index.bind(this, ObjectGroup),

  /**
   * @api {post} /api/v1/object-groups 2 - Create object group
   * @apiName PostObjectGroups
   * @apiGroup Object Group
   * @apiVersion 0.1.0
   *
   * @apiParam {String} [name]        Object group name
   * @apiParam {String} [description] Object group description
   * @apiParam {String} [location]    Physical or logical location of the object group
   *
   * @apiSuccess (201)  {Number} id   Object group ID
   *
   * @apiSuccessExample {json} 201 Created
   *     POST /api/v1/object-groups HTTP/1.1
   *     {
   *       "name": "Spanish",
   *       "description": "Spanish channels",
   *       "location": "Spain"
   *     }
   *
   *     HTTP/1.1 201 Created
   *     Location: /api/v1/object-groups/3
   *
   * @apiUse 400BadRequest
   * @apiUse 500InternalServerError
   */
  create: AbstractController.create.bind(this, ObjectGroup),

  /**
   * @api {get} /api/v1/object-groups/:id 3 - Get object group
   * @apiName GetObjectGroup
   * @apiGroup Object Group
   * @apiVersion 0.1.0
   *
   * @apiParam         {Number} id            Object group ID
   *
   * @apiSuccess (200) {Number} ObjectId      Object id of object group
   * @apiSuccess (200) {Number} id            Object group ID
   * @apiSuccess (200) {String} [name]        Object group name
   * @apiSuccess (200) {String} [description] Object group description
   * @apiSuccess (200) {String} [location]    Physical or logical location of the object group
   * @apiSuccess (200) {String} createdAt     Timestamp of creation in ISO format
   * @apiSuccess (200) {String} updatedAt     Timestamp of latest update in ISO format
   *
   * @apiSuccessExample {json} 200 OK
   *     HTTP/1.1 200 OK
   *     {
   *       "ObjectId": 13,
   *       "id": 3,
   *       "name": "Spanish",
   *       "description": "Spanish channels",
   *       "location": "Spain",
   *       "createdAt": "2015-08-31T14:35:21.202Z",
   *       "updatedAt": "2015-08-31T14:35:21.202Z"
   *     }
   *
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  show: AbstractController.show.bind(this, ObjectGroup),

  /**
   * @api {put} /api/v1/object-groups/:id 4 - Replace object group
   * @apiName PutObjectGroup
   * @apiGroup Object Group
   * @apiVersion 0.1.0
   *
   * @apiParam {String} [name]        Object group name
   * @apiParam {String} [description] Object group description
   * @apiParam {String} [location]    Physical or logical location of the object group
   *
   * @apiSuccess (200) {Number} id    Object group ID
   *
   * @apiSuccessExample {json} 201 OK
   *     PUT /api/v1/object-groups/3 HTTP/1.1
   *     {
   *       "name": "Spanish",
   *       "description": "Spanish channels",
   *       "location": "Spain",
   *       "layout": {}
   *     }
   *
   *     HTTP/1.1 200 OK
   *     {
   *       "ObjectId": 13,
   *       "id": 3,
   *       "name": "Spanish",
   *       "description": "Spanish channels",
   *       "location": "Spain",
   *       "createdAt": "2015-08-31T14:35:21.202Z",
   *       "updatedAt": "2015-08-31T14:35:21.202Z"
   *     }
   *
   * @apiUse 400BadRequest
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  update: AbstractController.update.bind(this, ObjectGroup),

  /**
   * @api {delete} /api/v1/object-groups/:id 5 - Delete object group
   * @apiName DeleteObjectGroup
   * @apiGroup Object Group
   * @apiVersion 0.1.0
   *
   * @apiParam {Number} id Object group ID
   *
   * @apiSuccess (2xx) 204 No Content
   *
   * @apiSuccessExample {json} 204 No Content
   *     HTTP/1.1 204 No Content
   *
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  destroy: AbstractController.destroy.bind(this, ObjectGroup)
};
