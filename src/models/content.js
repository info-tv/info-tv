var Sequelize = require('sequelize');
var _ = require('lodash');

var Extendable = require('./_extendable');

module.exports = function (sequelize) {
  var Content = sequelize.define('Content', _.extend({},
    Extendable.attributes(sequelize)
  ), {
    classMethods: {
      associate: function (models) {
        Content.belongsTo(models.Object);
      },

      /**
       * Get default values for each attributes
       *
       * @returns {Object}
       */
      defaultValues: function () {
        return {};
      }
    },

    hooks: {
      /**
       * Auto-create object for any created content
       *
       * @param instance
       * @returns {Promise}
       */
      beforeCreate: function (instance) {
        var Object = sequelize.model('Object');

        return Object.create({
          kind: Content
        }).then(function (object) {
          instance.ObjectId = object.id;
        });
      }
    }
  });

  return Content;
};
