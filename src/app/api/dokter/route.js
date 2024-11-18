// pages/api/dokter/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import pool from '../db';
import authenticate from '../auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        // Mendapatkan semua dokter
        try {
            const result = await pool.query('SELECT * FROM users'); // Ganti 'users' jika nama tabel berbeda
            res.status(200).json(result.rows);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error fetching doctors' });
        }
    } else if (req.method === 'POST') {
        // Menambahkan dokter baru
        const { kode, nama, noTelp, tanggalLahir, email, jenisKelamin } = req.body;
        try {
            const result = await pool.query(
                'INSERT INTO users (kode, nama, no_telp, tanggal_lahir, email, jenis_kelamin) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
                [kode, nama, noTelp, tanggalLahir, email, jenisKelamin]
            );
            res.status(201).json(result.rows[0]);
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error adding doctor' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

// pages/api/klinik.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: any, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; }): void; new(): any; }; }; }) {
  try {
    const klinikList = await prisma.klinik.findMany(); // Sesuaikan dengan tabel `klinik` di database Anda
    res.status(200).json(klinikList);
  } catch (error) {
    console.error("Database connection error:", error);
    res.status(500).json({ message: "Failed to connect to database" });
  } finally {
    await prisma.$disconnect();
  }
}

