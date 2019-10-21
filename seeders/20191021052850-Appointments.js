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
    return queryInterface.bulkInsert('Appointments', [{
      "createdAt": "2019-04-27 16:46:10",
      "updatedAt": "2019-08-08 08:01:11",
      "doctorId": 1,
      "patientId": 2
    }, {
      "createdAt": "2019-09-04 18:14:24",
      "updatedAt": "2019-03-29 08:17:05",
      "doctorId": 2,
      "patientId": 3
    }, {
      "createdAt": "2019-07-07 17:06:10",
      "updatedAt": "2019-08-01 04:50:35",
      "doctorId": 3,
      "patientId": 4
    }, {
      "createdAt": "2019-07-05 11:14:58",
      "updatedAt": "2018-12-07 13:11:14",
      "doctorId": 4,
      "patientId": 5
    }, {
      "createdAt": "2019-10-12 18:45:36",
      "updatedAt": "2019-03-11 01:34:12",
      "doctorId": 5,
      "patientId": 6
    }, {
      "createdAt": "2018-12-17 14:51:40",
      "updatedAt": "2019-03-11 00:01:49",
      "doctorId": 6,
      "patientId": 7
    }, {
      "createdAt": "2019-09-19 20:01:02",
      "updatedAt": "2019-04-17 13:07:18",
      "doctorId": 7,
      "patientId": 8
    }, {
      "createdAt": "2019-08-22 19:35:24",
      "updatedAt": "2019-05-18 06:09:50",
      "doctorId": 8,
      "patientId": 9
    }, {
      "createdAt": "2019-07-06 09:26:39",
      "updatedAt": "2019-06-19 05:47:14",
      "doctorId": 9,
      "patientId": 10
    }, {
      "createdAt": "2019-08-07 23:02:49",
      "updatedAt": "2019-01-28 05:07:57",
      "doctorId": 10,
      "patientId": 11
    }, {
      "createdAt": "2019-10-02 21:35:37",
      "updatedAt": "2019-07-29 07:03:48",
      "doctorId": 11,
      "patientId": 12
    }, {
      "createdAt": "2019-09-13 05:42:33",
      "updatedAt": "2019-02-07 17:07:13",
      "doctorId": 12,
      "patientId": 13
    }, {
      "createdAt": "2019-06-27 17:09:47",
      "updatedAt": "2019-10-17 05:01:09",
      "doctorId": 13,
      "patientId": 14
    }, {
      "createdAt": "2018-12-02 23:14:52",
      "updatedAt": "2019-10-16 03:30:40",
      "doctorId": 14,
      "patientId": 15
    }, {
      "createdAt": "2019-01-28 15:36:01",
      "updatedAt": "2019-05-06 17:59:24",
      "doctorId": 15,
      "patientId": 16
    }], {});
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
