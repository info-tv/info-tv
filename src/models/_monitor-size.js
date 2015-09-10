var Sequelize = require('sequelize');

module.exports = {
  attributes: {
    /**
     * Width in millimetres
     */
    width_mm: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },

    /**
     * Height in millimetres
     */
    height_mm: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },

    /**
     * Width in pixels
     */
    width_px: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    },

    /**
     * Height in pixels
     */
    height_px: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  },

  defaultValues: function () {
    return {};
  }
};
