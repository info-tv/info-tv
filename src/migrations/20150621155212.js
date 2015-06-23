'use strict';

module.exports = {
  /**
   * Create relations
   * - many-to-many relation between Situation and Content
   * - many-to-many relation between Situation and Screen
   *
   * @returns {Sequelize.Promise}
   */
  up: function (queryInterface, Sequelize) {
    var promises = [];

    promises.push(queryInterface.createTable('ScreensSituations', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      SituationId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: 'Situations',
        referencesKey: 'id',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      ScreenId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: 'Screens',
        referencesKey: 'id',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }
    }));

    promises.push(queryInterface.createTable('ContentsSituations', {
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      SituationId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: 'Situations',
        referencesKey: 'id',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      ContentId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: 'Contents',
        referencesKey: 'id',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }
    }));

    return Sequelize.Promise.all(promises);
  },

  /**
   * Remove relations
   * - many-to-many relation between Situation and Content
   * - many-to-many relation between Situation and Screen
   *
   * @returns {Sequelize.Promise}
   */
  down: function (queryInterface, Sequelize, done) {
    var promises = [];

    promises.push(queryInterface.dropTable('ScreensSituations'));
    promises.push(queryInterface.dropTable('ContentsSituations'));

    return Sequelize.Promise.all(promises);
  }
}
