'use strict';
// Migration
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clients', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        defaultValue: 1,
        references: {
          model: 'Users',
          foreignKey: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
     await queryInterface.dropTable('Clients');
  },
};
