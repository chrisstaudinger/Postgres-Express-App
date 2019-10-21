'use strict';
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    doctorId: DataTypes.INTEGER,
    patientId: DataTypes.INTEGER
  }, {});
  Appointment.associate = function(models) {
    Appointment.belongsTo(models.Patient)
    Appointment.belongsTo(models.Doctor)
    // associations can be defined here
  };
  return Appointment;
};