'use strict';
// Seeder
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Clients',
      [{
        id: 1,
        userId: 1,
        cpf: '123.456.789-10',
      },
      {
        id: 2,
        userId: 3,
        cpf: '321.454.782-59',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {});
  },
};
