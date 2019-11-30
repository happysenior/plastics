'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'type', {
      after: 'password',
      type: Sequelize.ENUM('NORMAL', 'PREMIUM')
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'type');
  }
};
