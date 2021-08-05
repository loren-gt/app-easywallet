'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Wallets', [{
      id: 1,
      userId: 1,
      balance: 15200.00,
    },
    {
      id: 2,
      userId: 2,
      balance: 7000.00,
    },
    {
      id: 3,
      userId: 3,
      balance: 5350.00,
    },
    {
      id: 4,
      userId: 4,
      balance: 9000.00,
    }
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Wallets', null, {});
  }
};
