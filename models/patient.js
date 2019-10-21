'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patient', {
    name: DataTypes.STRING
  }, {});
  Patient.associate = function(models) {
    Patient.hasMany(Appointments)
    Patient.belongsToMany(models.Doctor, { through: Appointments })
    // associations can be defined here
  };
  return Patient;
};

// npx sequelize model:generate --name Doctor --attributes name:string, medicalLicense:integer, patientId:integer
// npx sequelize model:generate --name Appointment --attributes doctorId:integer, patiendId:integer