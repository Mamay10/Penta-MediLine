const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const users = require('./users'); // File user yang berisi data username dan password

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Secret Key untuk JWT
const secretKey = "supersecretkey";

// Route login
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Cari user berdasarkan username
  const user = users.find((u) => u.username === username);
  
  if (!user) {
    return res.status(400).json({ message: 'User tidak ditemukan' });
  }

  // Cek password (dengan bcrypt)
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: 'Password salah' });
  }

  // Jika berhasil, buat token JWT
  const token = jwt.sign({ username: user.username }, secretKey, { expiresIn: '1h' });

  res.json({ token });
});

// Jalankan server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
