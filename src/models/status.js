module.exports = function (sequelize, DataTypes) {
  var Status = sequelize.define('Status', {
    /**
     * New status of the display
     */
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
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
        Status.belongsTo(models.Display, {
          foreignKey: {
            name: 'DisplayId',
            allowNull: false
          }
        });
      },

      /**
       * Get default values for each attributes
       *
       * @returns {Object}
       */
      defaultValues: function () {
        return {
          comment: ''
        };
      }
    },

    validate: {
      /**
       * Ensure that Display exists
       *
       * @returns {Promise}
       */
      displayExists: function () {
        var id = this.getDataValue('DisplayId');
        var Display = sequelize.model('Display');
        return Display.findById(id)
          .then(function (display) {
            if (!display) {
              throw new Error('DisplayId must refer to an existing Display');
            }
          });
      }
    }
  });

  return Status;
};
