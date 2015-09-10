var _ = require('lodash');

var Nameable = require('./_nameable');

module.exports = function (sequelize) {
  var ObjectGroup = sequelize.define('ObjectGroup', _.extend({},
    Nameable.attributes
  ), {
    classMethods: {
      associate: function (models) {
        ObjectGroup.belongsTo(models.Object);
        ObjectGroup.belongsToMany(models.Object, {
          as: 'Members',
          through: 'ObjectGroupMembers'
        });
      },

      /**
       * Get default values for each attributes
       *
       * @returns {Object}
       */
      defaultValues: function () {
        return _.extend({},
          Nameable.defaultValues()
        );
      }
    },

    hooks: {
      /**
       * Auto-create object for any created object group
       *
       * @param instance
       * @returns {Promise}
       */
      beforeCreate: function (instance) {
        var Object = sequelize.model('Object');

        return Object.create({
          kind: ObjectGroup
        }).then(function (object) {
          instance.ObjectId = object.id;
        });
      }
    }
  });

  return ObjectGroup;
};
