'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clients', {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
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
