'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Clients',
      [{
        userId: 1,
        cpf: '123.456.789-10',
      },
      {
        userId: 3,
        cpf: '321.454.782-59',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Clients', null, {});
  },
};
