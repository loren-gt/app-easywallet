'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Transactions', [{}], {});
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Transactions', null, {});
  }
};
