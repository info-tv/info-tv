var Sequelize = require('sequelize');
var _ = require('lodash');

var AbstractController = require('./_abstract-controller');
var models = require('../../models');
var Content = models['Content'];

module.exports = {
  before: AbstractController.before,

  findById: AbstractController.findById.bind(this, Content),

  /**
   * @api {get} /api/v1/contents 1 - List contents
   * @apiName GetContents
   * @apiGroup Content
   * @apiVersion 0.1.0
   *
   * @apiDescription Content is an abstract entity. The real ones can be e.g. an
   * image, a video, a slideshow, or a web page. They are all some kind of
   * content types. They can be shown in a channel or even in a screen in a
   * specific situation.
   *
   * @apiSuccess (200) {Object[]} contents           List of contents
   * @apiSuccess (200) {Number}   contents.ObjectId  Object id of content
   * @apiSuccess (200) {Number}   contents.id        Content ID
   * @apiSuccess (200) {String}   contents.kind      Table name of the real content
   * @apiSuccess (200) {String}   contents.createdAt Timestamp of creation in ISO format
   * @apiSuccess (200) {String}   contents.updatedAt Timestamp of latest update in ISO format
   *
   * @apiSuccessExample {json} 200 OK
   *     HTTP/1.1 200 OK
   *     [
   *       {
   *         "ObjectId": 18,
   *         "id": 7,
   *         "kind": "ImageContent",
   *         "createdAt": "2015-08-31T14:35:21.202Z",
   *         "updatedAt": "2015-08-31T14:35:21.202Z"
   *       }
   *     ]
   *
   *
   * @apiUse 500InternalServerError
   */
  index: AbstractController.index.bind(this, Content),

  /**
   * @api {get} /api/v1/contents/:id 2 - Get content
   * @apiName GetContent
   * @apiGroup Content
   * @apiVersion 0.1.0
   *
   * @apiParam         {Number} id        Content ID
   *
   * @apiSuccess (200) {Number} ObjectId  Object id of content
   * @apiSuccess (200) {Number} id        Content ID
   * @apiSuccess (200) {String} kind      Table name of the real content
   * @apiSuccess (200) {String} createdAt Timestamp of creation in ISO format
   * @apiSuccess (200) {String} updatedAt Timestamp of latest update in ISO format
   *
   * @apiSuccessExample {json} 200 OK
   *     HTTP/1.1 200 OK
   *     {
   *       "ObjectId": 18,
   *       "id": 7,
   *       "kind": "ImageContent",
   *       "createdAt": "2015-08-31T14:35:21.202Z",
   *       "updatedAt": "2015-08-31T14:35:21.202Z"
   *     }
   *
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  show: AbstractController.show.bind(this, Content),

  /**
   * @api {delete} /api/v1/contents/:id 3 - Delete content
   * @apiName DeleteContent
   * @apiGroup Content
   * @apiVersion 0.1.0
   *
   * @apiParam {Number} id Content ID
   *
   * @apiSuccess (2xx) 204 No Content
   *
   * @apiSuccessExample {json} 204 No Content
   *     HTTP/1.1 204 No Content
   *
   * @apiUse 404NotFound
   * @apiUse 500InternalServerError
   */
  destroy: AbstractController.destroy.bind(this, Content)
};
