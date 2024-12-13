// src/app/api/statuss/route.js
import pool from '../db';

export async function GET(req) {
  try {
    const result = await pool.query('SELECT * FROM statuss ORDER BY nomor ASC');
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
  const { kode , status, durasi, keterangan} = body;

  try {

    const existingKode = await pool.query(`SELECT 1 FROM statuss WHERE kode = $1`, [kode]);
    if (existingKode.rowCount > 0) {
      return new Response(
        JSON.stringify({ error: "Kode sudah ada" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const result = await pool.query(
      `INSERT INTO statuss (kode, status, durasi, keterangan ) VALUES ($1, $2, $3, $4) RETURNING *`,
      [kode , status, durasi, keterangan]
    );
    return new Response(JSON.stringify(result.rows[0]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error("POST Status Error:", error.message);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

export async function PUT(req) {
  const body = await req.json();
  const { nomor, kode , status, durasi, keterangan} = body;

  try {
    const result = await pool.query(
      `UPDATE statuss SET kode = $1, status = $2, durasi = $3, keterangan = $4 WHERE nomor = $5 RETURNING *`,
      [kode , status, durasi, keterangan, nomor]
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
    await pool.query(`DELETE FROM statuss WHERE nomor = $1`, [nomor]);
    return new Response(JSON.stringify({ message: 'status berhasil dihapus' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
