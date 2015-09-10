var _ = require('lodash');

module.exports = function (sequelize, DataTypes) {
  var Situation = sequelize.define('Situation', {
    /**
     * Evaluable condition expression. It can be evaluated to
     * - true              I can be chosen to C
     * - changing to true  I can be chosen to C after a little time
     * - changing to false I cannot be chosen to C after a little time
     * - false             I cannot be chosen to C
     * where I is item and C is container.
     *
     * Data transform: Condition <-> String/JSON
     *
     * todo: validate condition
     */
    condition: {
      type: DataTypes.TEXT,
      defaultValue: '{}',
      validate: {
        isJSON: true
      },

      /**
       * Transform from String/JSON to Object/JSON
       *
       * @return {Object}
       */
      get: function () {
        var value = this.getDataValue('condition');

        if (value) {
          try {
            return JSON.parse(value);
          } catch (e) {
          }
        }

        return {};
      },

      /**
       * Transform from Object/JSON to String/JSON
       *
       * @param {String|Object} value
       */
      set: function (value) {
        if (typeof value !== 'string') {
          try {
            value = JSON.stringify(value);
          } catch (e) {
            // this will fail at validation
            value = 'invalid JSON';
          }
        }
        this.setDataValue('condition', value);
      }
    },

    /**
     * Priority of the situation used in competition synchronization. With a
     * lower/higher priority, the item will be chosen less/more often to the
     * container than ones with priority 0 which is the normal priority.
     *
     * -∞ means choose never, 0 is normal, and ∞ means choose always.
     */
    priority: {
      type: DataTypes.FLOAT,
      defaultValue: 0.0
    },

    /**
     * Duration (in milliseconds) of a single continuous showing time once the
     * item has been chosen to the container.
     */
    showing_time: {
      type: DataTypes.FLOAT,
      defaultValue: 30000.0,
      validate: {
        min: 0.0
      }
    }
  }, {
    classMethods: {
      associate: function (models) {
        Situation.belongsTo(models.Object, {as: 'Container'});
        Situation.belongsTo(models.Object, {as: 'Item'});
      },

      /**
       * Get default values for each attributes
       *
       * @returns {Object}
       */
      defaultValues: function () {
        return {
          condition: '{}',
          priority: 0.0,
          showing_time: 30000.0
        };
      }
    }
  });

  return Situation;
};
