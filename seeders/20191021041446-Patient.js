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
   return queryInterface.bulkInsert('Patients', [{
    "name": "Ros",
    "createdAt": "2019-09-07 16:24:00",
    "updatedAt": "2019-04-22 02:10:47"
    }, {
      "name": "Tallia",
      "createdAt": "2019-02-08 00:58:50",
      "updatedAt": "2019-03-16 08:07:34"
    }, {
      "name": "Stafani",
      "createdAt": "2019-09-26 00:29:35",
      "updatedAt": "2019-04-27 21:34:35"
    }, {
      "name": "Kelley",
      "createdAt": "2019-05-02 17:00:11",
      "updatedAt": "2019-05-31 09:29:31"
    }, {
      "name": "Joelle",
      "createdAt": "2018-11-09 12:55:05",
      "updatedAt": "2019-07-13 11:18:50"
    }, {
      "name": "Rosalie",
      "createdAt": "2019-07-18 15:34:48",
      "updatedAt": "2018-12-30 13:54:38"
    }, {
      "name": "Winthrop",
      "createdAt": "2019-05-29 13:12:08",
      "updatedAt": "2018-12-08 17:20:12"
    }, {
      "name": "Lauren",
      "createdAt": "2019-01-31 03:30:30",
      "updatedAt": "2019-05-11 19:02:25"
    }, {
      "name": "Marcus",
      "createdAt": "2019-01-21 20:59:18",
      "updatedAt": "2018-11-20 14:24:30"
    }, {
      "name": "Fax",
      "createdAt": "2019-03-30 17:31:57",
      "updatedAt": "2018-12-22 04:25:42"
    }, {
      "name": "Nevile",
      "createdAt": "2018-12-13 22:39:37",
      "updatedAt": "2019-08-15 03:57:24"
    }, {
      "name": "Franky",
      "createdAt": "2019-09-24 16:04:35",
      "updatedAt": "2019-04-07 07:48:32"
    }, {
      "name": "Celia",
      "createdAt": "2019-09-15 23:42:53",
      "updatedAt": "2019-01-08 04:22:30"
    }, {
      "name": "Daisy",
      "createdAt": "2018-11-22 18:44:34",
      "updatedAt": "2019-02-10 02:33:09"
    }, {
      "name": "Shani",
      "createdAt": "2018-12-15 11:23:54",
      "updatedAt": "2018-11-04 18:10:42"
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
