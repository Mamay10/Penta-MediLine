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
  const {id, username, password, nama_lengkap, no_telp, tanggal_lahir, email, jenis_kelamin, role } = body;

  try {
    const existingid = await pool.query(`SELECT 1 FROM users WHERE id = $1`, [id]);
    if (existingid.rowCount > 0) {
      return new Response(
        JSON.stringify({ error: "id sudah ada" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const result = await pool.query(
      `INSERT INTO users (id,username, password, nama_lengkap, no_telp, tanggal_lahir, email, jenis_kelamin, role) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,
      [id, username, password, nama_lengkap, no_telp, tanggal_lahir, email, jenis_kelamin, role]
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
  const { nomor,id, username, password, nama_lengkap, no_telp, tanggal_lahir, email, jenis_kelamin, role } = body;

  try {
    const result = await pool.query(
      `UPDATE users SET id=$1, username = $2, password = $3, nama_lengkap =$4, no_telp = $5, tanggal_lahir = $6, email = $7, jenis_kelamin = $8, role = $9 WHERE nomor = $10 RETURNING *`,
      [id, username, password, nama_lengkap, no_telp, tanggal_lahir, email, jenis_kelamin, role, nomor]
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
    await pool.query(`DELETE FROM users WHERE nomor = $1`, [nomor]);
    return new Response(JSON.stringify({ message: 'user berhasil dihapus' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
