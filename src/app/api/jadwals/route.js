import pool from "../db";

// GET: Ambil semua jadwal
export async function GET(req) {
  try {
    const result = await pool.query(
     `SELECT jadwals.nomor,jadwals.kode, jadwals.shift, 
              CONCAT(jadwals.jam_masuk, ' - ', jadwals.jam_selesai) AS waktu, 
              jadwals.jam_masuk, jadwals.jam_selesai,
              dokters.nama AS dokter, polis.nama AS poli
       FROM jadwals
       JOIN dokters ON jadwals.dokter = dokters.kode
       JOIN polis ON jadwals.poli = polis.kode
       ORDER BY jadwals.nomor ASC`
    );
    console.log("GET Jadwals Result:", result.rows); // Tambahkan log di sini
    return new Response(JSON.stringify(result.rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

// POST: Tambah jadwal baru
export async function POST(req) {
  const body = await req.json();
  console.log("POST Jadwal Body:", body); // Log data yang diterima
  const { kode, shift, jam_masuk, jam_selesai, dokter, poli } = body;

  try {
    const result = await pool.query(
      `INSERT INTO jadwals (kode, shift, jam_masuk, jam_selesai, dokter, poli) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [kode, shift, jam_masuk, jam_selesai, dokter, poli]
    );
    console.log("POST Jadwal Result:", result.rows[0]); // Log hasil query
    return new Response(JSON.stringify(result.rows[0]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("POST Jadwal Error:", error.message); // Log error
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}


// PUT: Update jadwal
export async function PUT(req) {
  const body = await req.json();
  const { nomor, kode, shift, jam_masuk, jam_selesai, dokter, poli } = body;

  try {
    const result = await pool.query(
      `UPDATE jadwals SET kode = $1, shift = $2, jam_masuk = $3, jam_selesai = $4, 
       dokter = $5, poli = $6 WHERE nomor = $7 RETURNING *`,
      [kode, shift, jam_masuk, jam_selesai, dokter, poli, nomor]
    );
    return new Response(JSON.stringify(result.rows[0]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}

// DELETE: Hapus jadwal
export async function DELETE(req) {
  const url = new URL(req.url);
  const nomor = url.searchParams.get("nomor");

  try {
    await pool.query(`DELETE FROM jadwals WHERE nomor = $1`, [nomor]);
    return new Response(
      JSON.stringify({ message: "Jadwal berhasil dihapus" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
