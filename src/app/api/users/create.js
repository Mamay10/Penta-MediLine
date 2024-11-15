// pages/api/users/create.js
import pool from '../db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password, nama_lengkap, no_telp, tanggal_lahir, email, jenis_kelamin, role } = req.body;
    try {
      const result = await pool.query(
        `INSERT INTO users (username, password, nama_lengkap, no_telp, tanggal_lahir, email, jenis_kelamin, role) 
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
        [username, password, nama_lengkap, no_telp, tanggal_lahir, email, jenis_kelamin, role]
      );
      res.status(200).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
