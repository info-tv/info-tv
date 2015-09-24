module.exports = {
  up: function (queryInterface, Sequelize) {
    return Sequelize.Promise.all([
      queryInterface.createTable('Objects', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        kind: {
          allowNull: false,
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),

      queryInterface.createTable('Screens', {
        ObjectId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Objects',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        location: {
          type: Sequelize.STRING
        },
        width_mm: {
          type: Sequelize.INTEGER
        },
        height_mm: {
          type: Sequelize.INTEGER
        },
        width_px: {
          type: Sequelize.INTEGER
        },
        height_px: {
          type: Sequelize.INTEGER
        },
        layout: {
          type: Sequelize.TEXT
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),

      queryInterface.createTable('Channels', {
        ObjectId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Objects',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        location: {
          type: Sequelize.STRING
        },
        layout: {
          type: Sequelize.TEXT
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),

      queryInterface.createTable('Contents', {
        ObjectId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Objects',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        kind: {
          allowNull: false,
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),

      queryInterface.createTable('ObjectGroups', {
        ObjectId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Objects',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        location: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),

      queryInterface.createTable('ObjectGroupMembers', {
        GroupId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'ObjectGroups',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        MemberId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Objects',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        }
      }),

      queryInterface.createTable('Displays', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        ScreenId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Screens',
            key: 'id'
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        },
        name: {
          type: Sequelize.STRING
        },
        description: {
          type: Sequelize.STRING
        },
        location: {
          type: Sequelize.STRING
        },
        width_mm: {
          type: Sequelize.INTEGER
        },
        height_mm: {
          type: Sequelize.INTEGER
        },
        width_px: {
          type: Sequelize.INTEGER
        },
        height_px: {
          type: Sequelize.INTEGER
        },
        x: {
          type: Sequelize.INTEGER
        },
        y: {
          type: Sequelize.INTEGER
        },
        ssh: {
          type: Sequelize.STRING
        },
        public_key: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),

      queryInterface.createTable('Statuses', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        DisplayId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Displays',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        status: {
          allowNull: false,
          type: Sequelize.STRING
        },
        comment: {
          type: Sequelize.STRING
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }),

      queryInterface.createTable('Situations', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        ContainerId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Objects',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        ItemId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Objects',
            key: 'id'
          },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        condition: {
          allowNull: false,
          type: Sequelize.STRING(1000)
        },
        priority: {
          type: Sequelize.FLOAT
        },
        showing_time: {
          type: Sequelize.FLOAT
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      })
    ]);
  },

  down: function (queryInterface, Sequelize) {
    return Sequelize.Promise.all([
      queryInterface.dropTable('Objects'),
      queryInterface.dropTable('Screens'),
      queryInterface.dropTable('Channels'),
      queryInterface.dropTable('Contents'),
      queryInterface.dropTable('ObjectGroups'),
      queryInterface.dropTable('ObjectGroupMembers'),
      queryInterface.dropTable('Displays'),
      queryInterface.dropTable('Statuses'),
      queryInterface.dropTable('Situations')
    ]);
  }
};
