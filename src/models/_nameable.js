var Sequelize = require('sequelize');

module.exports = {
  attributes: {
    name: {
      type: Sequelize.STRING,
      defaultValue: ''
    },

    description: {
      type: Sequelize.STRING,
      defaultValue: ''
    },

    /**
     * Physical (or logical) location
     */
    location: {
      type: Sequelize.STRING,
      defaultValue: ''
    }
  },

  defaultValues: function () {
    return {
      name: '',
      description: '',
      location: ''
    };
  }
};
