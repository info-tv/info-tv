var _ = require('lodash');

var MonitorSize = require('./_monitor-size');
var Nameable = require('./_nameable');

module.exports = function (sequelize, DataTypes) {
  var Display = sequelize.define('Display', _.extend({},
    MonitorSize.attributes,
    Nameable.attributes,
    {
      /**
       * X coordinate (in pixels) of the top-left corner of the display in screen
       */
      x: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },

      /**
       * Y coordinate (in pixels) of the top-left corner of the display in screen
       */
      y: {
        type: DataTypes.INTEGER,
        defaultValue: 0
      },

      /**
       * SSH url of the display
       *
       * todo: complete validation
       */
      ssh: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isURL: {
            msg: 'Must be a valid SSH URL',
            args: {
              protocols: ['ssh'],
              require_protocol: true
            }
          }
        }
      },

      /**
       * Public key of the display
       *
       * todo: validate public key
       */
      public_key: {
        type: DataTypes.STRING,
        allowNull: true
      }
    }
  ), {
    classMethods: {
      associate: function (models) {
        Display.hasMany(models['Status']);
        Display.belongsTo(models['Screen']);
      },

      /**
       * Get default values for each attributes
       *
       * @returns {Object}
       */
      defaultValues: function () {
        return _.extend({},
          MonitorSize.defaultValues(),
          Nameable.defaultValues(),
          {
            x: 0,
            y: 0,
            ssh: null,
            public_key: null
          }
        );
      }
    }
  });

  return Display;
};
