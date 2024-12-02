import express from 'express';
import bodyParser from 'body-parser';
import registRoutes from './regist/routes.js'; // Path ke routes.js

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());

// Routes API
app.use('/api', registRoutes);

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
