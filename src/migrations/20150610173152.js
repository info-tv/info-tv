'use strict';

module.exports = {
  /**
   * Create Contents, Screens and Situations tables
   *
   * @returns {Sequelize.Promise}
   */
  up: function (queryInterface, Sequelize) {
    var promises = [];

    promises.push(queryInterface.createTable('Contents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING,
        defaultValue: ''
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }));

    promises.push(queryInterface.createTable('Screens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }));

    promises.push(queryInterface.createTable('Situations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      condition: {
        type: Sequelize.STRING,
        defaultValue: 'false'
      },
      changingTime: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }));

    return Sequelize.Promise.all(promises);
  },

  /**
   * Drop Contents, Screens and Situations tables
   *
   * @returns {Sequelize.Promise}
   */
  down: function (queryInterface, Sequelize, done) {
    var promises = [];

    promises.push(queryInterface.dropTable('Contents'));
    promises.push(queryInterface.dropTable('Screens'));
    promises.push(queryInterface.dropTable('Situations'));

    return Sequelize.Promise.all(promises);
  }
}
