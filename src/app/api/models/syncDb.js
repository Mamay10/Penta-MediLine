const sequelize = require('../db');
const Appointment = require('./api/models/Appointment');

sequelize.sync({ force: true })
  .then(() => {
    console.log("Database & tables created!");
    // Optional: Seed data here if needed
    Appointment.bulkCreate([
      {
        queueNumber: '001',
        nik: '1234567890123456',
        patientName: 'John Doe',
        doctor: 'Dr. Smith',
        clinic: 'General',
        date: new Date(),
        status: 'Completed'
      },
      {
        queueNumber: '002',
        nik: '2345678901234567',
        patientName: 'Jane Doe',
        doctor: 'Dr. Brown',
        clinic: 'Pediatrics',
        date: new Date(),
        status: 'Completed'
      }
    ]);
  })
  .catch(err => console.log("Error creating database tables:", err));
