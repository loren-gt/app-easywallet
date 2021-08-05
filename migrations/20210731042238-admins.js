'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Admins', {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        defaultValue: 1,
        primaryKey: true,
        references: {
          model: 'Users',
          key: 'id',
        },
        field: 'userId',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
    });
  },

  down: async (queryInterface, _Sequelize) => {
     await queryInterface.dropTable('Admins');
  }
};
