import express from 'express';
import pool from '../db.js'; // Path relatif ke db.js

const router = express.Router();

// Route untuk registrasi BPJS
router.post('/register-bpjs', async (req, res) => {
  try {
    const { no_kartu, nama, tanggal_lahir, alamat, no_telp, dokter_nama, klinik_nama } = req.body;

    const result = await pool.query(
      `INSERT INTO registrasi_bpjs (no_kartu, nama, tanggal_lahir, alamat, no_telp, dokter_nama, klinik_nama)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [no_kartu, nama, tanggal_lahir, alamat, no_telp, dokter_nama, klinik_nama]
    );

    res.status(201).json({ message: 'Registrasi BPJS berhasil!', data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route untuk registrasi NON BPJS
router.post('/register-nonbpjs', async (req, res) => {
  try {
    const { nik, nama, tanggal_lahir, alamat, no_telp, dokter_nama, klinik_nama } = req.body;

    const result = await pool.query(
      `INSERT INTO registrasi_non_bpjs (nik, nama, tanggal_lahir, alamat, no_telp, dokter_nama, klinik_nama)
       VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
      [nik, nama, tanggal_lahir, alamat, no_telp, dokter_nama, klinik_nama]
    );

    res.status(201).json({ message: 'Registrasi NON BPJS berhasil!', data: result.rows[0] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
