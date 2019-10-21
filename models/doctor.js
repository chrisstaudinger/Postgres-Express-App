'use strict';
module.exports = (sequelize, DataTypes) => {
  const Doctor = sequelize.define('Doctor', {
    name: DataTypes.STRING,
    medicalLicense: DataTypes.INTEGER
  }, {});
  Doctor.associate = function(models) {
    // associations can be defined here
    Doctor.hasMany(Appointments)
    Doctors.belongsToMany(models.Patient, { through: Appointments })
  };
  return Doctor;
};