const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Appointment = sequelize.define('Appointment', {
  queueNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nik: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  patientName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  doctor: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  clinic: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('Pending', 'Completed'),
    defaultValue: 'Pending',
  },
});

module.exports = Appointment;
