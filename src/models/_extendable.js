Sequelize = require('sequelize');

module.exports = {
  attributes: function (sequelize) {
    return {
      /**
       * Table name of sub-model
       *
       * Data transform: Sequelize.Model <-> String
       */
      kind: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          /**
           * @throws Error if there is no model with a given name
           * @param {String} value
           */
          modelIsDefined: function (value) {
            if (!sequelize.isDefined(value)) {
              throw new Error('Model ' + value + ' must be defined!');
            }
          }
        },

        /**
         * Transform from Sequelize.Model to String
         *
         * @param {String|Sequelize.Model} model
         */
        set: function (model) {
          if (model instanceof Sequelize.Model) {
            model = model.name;
          }

          this.setDataValue('kind', model);
        }
      }
    }
  }
};
