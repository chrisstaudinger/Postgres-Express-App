'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Appointments', 'patiendId', 'patientId');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('Appointments', 'patientId', 'patiendId');
  }
};
