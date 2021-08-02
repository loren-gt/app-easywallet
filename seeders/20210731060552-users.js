'use strict';
// Seeder
module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        isAdmin: 0,
        fullName: 'Rebeca Andrade',
        email: 'rebeca_andrade@gmail.com',
        password: '123456',
      },
      {
        id: 2,
        isAdmin: 1,
        fullName: 'Pabllo Vittar',
        email: 'pablovittar@gmail.com',
        password: '123456',
      },
      {
        id: 3,
        isAdmin: 0,
        fullName: 'Rayssa Leal',
        email: 'rayssa_leal_sk8@gmail.com',
        password: '123456',
      },
      {
        id: 4,
        isAdmin: 1,
        fullName: 'Gaby Amarantos',
        email: 'gaby_amarantosr@gmail.com',
        password: '123456',
      }
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
