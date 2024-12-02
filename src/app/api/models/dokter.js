const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Dokter = sequelize.define("Dokter", {
  kode: {
    type: DataTypes.STRING(10),
    primaryKey: true,
    allowNull: false,
  },
  nama: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Dokter;
