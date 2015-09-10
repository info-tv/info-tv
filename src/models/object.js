var Sequelize = require('sequelize');
var _ = require('lodash');

var Extendable = require('./_extendable');

module.exports = function (sequelize) {
  var Object = sequelize.define('Object', _.extend({},
    Extendable.attributes(sequelize)
  ), {
    classMethods: {
      associate: function (models) {
        Object.belongsToMany(models.ObjectGroup, {
          as: 'Groups',
          through: 'ObjectGroupMembers'
        });
      },

      /**
       * Get default values for each attributes
       *
       * @returns {Object}
       */
      defaultValues: function () {
        return {};
      }
    }
  });

  return Object;
};
