// pages/api/users/create.js
import pool from '../db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { kode, nama_lengkap } = req.body;
    try {
      const result = await pool.query(
        `INSERT INTO users (kode, nama_lengkap) 
        VALUES ($1, $2) RETURNING *`,
        [kode, nama_lengkap]
      );
      res.status(200).json(result.rows[0]);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
