'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Listings', 'unit', {
      type: Sequelize.ENUM('lb', 'MT', 'kg')
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Listings', 'unit', {
      type: Sequelize.STRING
    })
  }
};
