import pool from '../db'; // Impor koneksi pool dari db.js

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Mendapatkan semua data registrasi
    try {
      const result = await pool.query('SELECT * FROM registrasi');
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Database error' });
    }
  } else if (req.method === 'POST') {
    // Menambahkan data registrasi baru
    const { nik, nama, tanggal_lahir, alamat, no_telp, dokter_kode, klinik_kode } = req.body;

    try {
      const query = `
        INSERT INTO registrasi (nik, nama, tanggal_lahir, alamat, no_telp, dokter_kode, klinik_kode)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`;
      const values = [nik, nama, tanggal_lahir, alamat, no_telp, dokter_kode, klinik_kode];

      const result = await pool.query(query, values);
      res.status(201).json(result.rows[0]);
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ error: 'Database error' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
