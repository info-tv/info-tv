var _ = require('lodash');

var Layout = require('./_layout');
var MonitorSize = require('./_monitor-size');
var Nameable = require('./_nameable');

module.exports = function (sequelize) {
  var Screen = sequelize.define('Screen', _.extend({},
    Layout.attributes,
    MonitorSize.attributes,
    Nameable.attributes
  ), {
    classMethods: {
      associate: function (models) {
        Screen.belongsTo(models.Object);
        Screen.hasMany(models.Display);
      },

      /**
       * Get default values for each attributes
       *
       * @returns {Object}
       */
      defaultValues: function () {
        return _.extend({},
          Layout.defaultValues(),
          MonitorSize.defaultValues(),
          Nameable.defaultValues()
        );
      }
    },

    hooks: {
      /**
       * Auto-create object for any created screen
       *
       * @param instance
       * @returns {Promise}
       */
      beforeCreate: function (instance) {
        var Object = sequelize.model('Object');

        return Object.create({
          kind: Screen
        }).then(function (object) {
          instance.ObjectId = object.id;
        });
      }
    }
  });

  return Screen;
};
