// pages/api/klinik/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import pool from './../db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Mendapatkan semua klinik
        try {
            const result = await pool.query('SELECT * FROM clinics'); // Ganti 'clinics' jika nama tabel berbeda
            res.status(200).json(result.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching clinics' });
        }
    } else if (req.method === 'POST') {
        // Menambahkan klinik baru
        const { kode, namaKlinik } = req.body;
        try {
            const result = await pool.query(
                'INSERT INTO clinics (kode, nama_klinik) VALUES ($1, $2) RETURNING *',
                [kode, namaKlinik]
            );
            res.status(201).json(result.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error adding clinic' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
