const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Klinik = sequelize.define("Klinik", {
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

module.exports = Klinik;
