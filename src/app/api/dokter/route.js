// src/app/api/users/route.js
import pool from '../db';

export async function GET(req) {
  try {
    const result = await pool.query('SELECT * FROM dokters ORDER BY nomor ASC');
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
  const {kode, nama_lengkap } = body;

  try {
    const result = await pool.query(
      `INSERT INTO users (kode, nama_lengkap ) 
       VALUES ($1, $2) RETURNING *`,
      [kode, nama_lengkap]
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
