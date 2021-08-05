'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Admins',
      [{
        userId: 2,
        cnpj: '22.896.431/0001-10',
      },
      {
        userId: 4,
        cnpj: '23.759.481/0002-40',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Admins', null, {});
  },
};
