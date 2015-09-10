var _ = require('lodash');

var Layout = require('./_layout');
var Nameable = require('./_nameable');

module.exports = function (sequelize) {
  var Channel = sequelize.define('Channel', _.extend({},
    Layout.attributes,
    Nameable.attributes
  ), {
    classMethods: {
      associate: function (models) {
        Channel.belongsTo(models.Object);
      },

      /**
       * Get default values for each attributes
       *
       * @returns {Object}
       */
      defaultValues: function () {
        return _.extend({},
          Layout.defaultValues(),
          Nameable.defaultValues()
        );
      }
    },

    hooks: {
      /**
       * Auto-create object for any created channel
       *
       * @param instance
       * @returns {Promise}
       */
      beforeCreate: function (instance) {
        var Object = sequelize.model('Object');

        return Object.create({
          kind: Channel
        }).then(function (object) {
          instance.ObjectId = object.id;
        });
      }
    }
  });

  return Channel;
};
