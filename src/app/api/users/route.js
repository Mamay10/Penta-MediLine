// src/app/api/users/route.js
import pool from '../db';

export async function GET(req) {
  try {
    const result = await pool.query('SELECT * FROM users ORDER BY nomor ASC');
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function POST(req) {
  const body = await req.json();
  const { username, password, nama_lengkap, no_telp, tanggal_lahir, email, jenis_kelamin, role } = body;

  try {
    const result = await pool.query(
      `INSERT INTO users (username, password, nama_lengkap, no_telp, tanggal_lahir, email, jenis_kelamin, role) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [username, password, nama_lengkap, no_telp, tanggal_lahir, email, jenis_kelamin, role]
    );
    return new Response(JSON.stringify(result.rows[0]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
