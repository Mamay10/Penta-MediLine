// src/app/api/polis/route.js
import pool from '../db';

export async function GET(req) {
  try {
    const result = await pool.query('SELECT * FROM polis ORDER BY nomor ASC');
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
  const { nama, kode } = body;

  try {
    const result = await pool.query(
      `INSERT INTO polis (nama, kode) VALUES ($1, $2) RETURNING *`,
      [nama, kode]
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

export async function PUT(req) {
  const body = await req.json();
  const { nomor, nama, kode } = body;

  try {
    const result = await pool.query(
      `UPDATE polis SET nama = $1, kode = $2 WHERE nomor = $3 RETURNING *`,
      [nama, kode, nomor]
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

export async function DELETE(req) {
  const url = new URL(req.url);
  const nomor = url.searchParams.get('nomor');

  try {
    await pool.query(`DELETE FROM polis WHERE nomor = $1`, [nomor]);
    return new Response(JSON.stringify({ message: 'Poli berhasil dihapus' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
