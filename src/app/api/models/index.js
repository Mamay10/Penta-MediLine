const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const sequelize = require("./models/index");
const Dokter = require("./models/dokter");
const Klinik = require("./models/klinik");
const Registrasi = require("./models/registrasi");
const registrasiRoutes = require("./regist/routes");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/registrasi", registrasiRoutes);

// Sync database and start server
(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log("Database synced!");
    app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
  } catch (err) {
    console.error("Failed to sync database:", err);
  }
})();
