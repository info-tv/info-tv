module.exports = function (sequelize, DataTypes) {
  var Status = sequelize.define('Status', {
    /**
     * New status of the display
     */
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },

    /**
     * Comment of the administrator
     */
    comment: {
      type: DataTypes.STRING,
      defaultValue: ''
    }
  }, {
    classMethods: {
      associate: function (models) {
        Status.belongsTo(models.Display);
      },

      /**
       * Get default values for each attributes
       *
       * @returns {Object}
       */
      defaultValues: function () {
        return {
          status: null,
          comment: ''
        };
      }
    }
  });

  return Status;
};
