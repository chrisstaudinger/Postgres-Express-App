'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Doctors', [{
    "name": "Lianna",
    "createdAt": "2019-05-14 12:22:33",
    "updatedAt": "2018-12-04 01:27:35",
    "medicalLicense": "53270"
  }, {
    "name": "Jayson",
    "createdAt": "2018-11-11 15:33:57",
    "updatedAt": "2019-08-09 03:50:44",
    "medicalLicense": "33447"
  }, {
    "name": "Yalonda",
    "createdAt": "2019-10-11 02:31:45",
    "updatedAt": "2019-03-05 00:15:42",
    "medicalLicense": "91263"
  }, {
    "name": "Huntlee",
    "createdAt": "2018-11-11 22:53:17",
    "updatedAt": "2019-09-03 04:20:04",
    "medicalLicense": "67558"
  }, {
    "name": "Stanton",
    "createdAt": "2019-09-08 09:17:32",
    "updatedAt": "2018-12-13 18:44:29",
    "medicalLicense": "45071"
  }, {
    "name": "Scot",
    "createdAt": "2019-03-06 18:55:52",
    "updatedAt": "2018-11-18 16:07:12",
    "medicalLicense": "81962"
  }, {
    "name": "Thorndike",
    "createdAt": "2019-05-06 10:03:51",
    "updatedAt": "2018-10-31 09:33:57",
    "medicalLicense": "50250"
  }, {
    "name": "Courtenay",
    "createdAt": "2019-02-12 15:30:26",
    "updatedAt": "2019-05-24 02:00:19",
    "medicalLicense": "67647"
  }, {
    "name": "Saloma",
    "createdAt": "2019-10-13 21:34:07",
    "updatedAt": "2018-12-08 13:37:19",
    "medicalLicense": "40266"
  }, {
    "name": "Ailyn",
    "createdAt": "2019-08-24 01:37:45",
    "updatedAt": "2018-10-28 21:44:45",
    "medicalLicense": "55890"
  }, {
    "name": "Myrvyn",
    "createdAt": "2018-11-07 10:45:24",
    "updatedAt": "2019-08-29 14:01:32",
    "medicalLicense": "62435"
  }, {
    "name": "Angelle",
    "createdAt": "2019-08-10 17:56:22",
    "updatedAt": "2019-01-23 19:57:23",
    "medicalLicense": "10526"
  }, {
    "name": "Erik",
    "createdAt": "2019-01-24 07:38:50",
    "updatedAt": "2019-06-17 07:37:18",
    "medicalLicense": "86511"
  }, {
    "name": "Fergus",
    "createdAt": "2019-07-05 19:58:44",
    "updatedAt": "2018-12-12 16:36:27",
    "medicalLicense": "70927"
  }, {
    "name": "Amble",
    "createdAt": "2019-04-03 03:15:27",
    "updatedAt": "2019-07-02 10:14:28",
    "medicalLicense": "65038"
  }], {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
