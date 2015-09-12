var Sequelize = require('sequelize');

module.exports = {
  attributes: {
    /**
     * Layout (and style)
     *
     * Data transform: Object/JSON <-> String/JSON
     *
     * Todo: not implemented
     */
    layout: {
      type: Sequelize.TEXT,
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
        var value = this.getDataValue('layout');

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
        this.setDataValue('layout', value);
      }
    }
  },

  defaultValues: function () {
    return {
      layout: '{}'
    };
  }
};
