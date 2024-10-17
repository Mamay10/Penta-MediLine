const bcrypt = require('bcryptjs');

// Buat hash password agar lebih aman
const hashedPassword = bcrypt.hashSync('password123', 8);

const users = [
  {
    username: 'admin',
    password: hashedPassword, // Password yang sudah di-hash
  },
  {
    username: 'user1',
    password: bcrypt.hashSync('password456', 8),
  },
];

module.exports = users;
