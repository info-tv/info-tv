module.exports = {
  up: function (queryInterface, Sequelize) {
    var promises = [];

    promises.push(queryInterface.createTable('Objects', {
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
    }));

    promises.push(queryInterface.createTable('Screens', {
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
    }));

    promises.push(queryInterface.createTable('Channels', {
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
    }));

    promises.push(queryInterface.createTable('Contents', {
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
    }));

    promises.push(queryInterface.createTable('ObjectGroups', {
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
    }));

    promises.push(queryInterface.createTable('ObjectGroupMembers', {
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
    }));

    promises.push(queryInterface.createTable('Displays', {
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
        onDelete: 'CASCADE',
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
    }));

    promises.push(queryInterface.createTable('Statuses', {
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
    }));

    promises.push(queryInterface.createTable('Situations', {
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
    }));

    return Sequelize.Promise.all(promises);
  },

  down: function (queryInterface, Sequelize) {
    var promises = [];

    promises.push(queryInterface.dropTable('Objects'));
    promises.push(queryInterface.dropTable('Screens'));
    promises.push(queryInterface.dropTable('Channels'));
    promises.push(queryInterface.dropTable('Contents'));
    promises.push(queryInterface.dropTable('ObjectGroups'));
    promises.push(queryInterface.dropTable('ObjectGroupMembers'));
    promises.push(queryInterface.dropTable('Displays'));
    promises.push(queryInterface.dropTable('Statuses'));
    promises.push(queryInterface.dropTable('Situations'));

    return Sequelize.Promise.all(promises);
  }
};
