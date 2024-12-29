import pool from "../db";

//GET: Ambil semua loket
export async function GET(req) {
    try {
        const result = await pool.query(
            `SELECT lokets.nomor, lokets.nama, lokets.kode_antrian, lokets.jenis_loket,
            dokters.nama AS dokter, polis.nama AS poli
        FROM lokets
        JOIN dokters ON lokets.dokter = dokters.kode
        JOIN polis ON lokets.poli = polis.kode
        ORDER BY lokets.nomor ASC`
        );
        console.log("GET Lokets Result:", result.rows); // Tambahkan log di sini
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

// POST: Tambah loket baru
export async function POST(req) {
    const body = await req.json();
    const { nama, kode_antrian, jenis_loket, dokter, poli } = body;

    try {
        // Cek apakah kode sudah ada
        const existingKode = await pool.query(`SELECT 1 FROM lokets WHERE kode_antrian = $1`, [kode_antrian]);
        if (existingKode.rowCount > 0) {
            return new Response(
                JSON.stringify({ error: "Kode antrian sudah ada" }), { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // Jika kode tidak ada, tambahkan data baru
        const result = await pool.query(
            `INSERT INTO lokets (nama, kode_antrian, jenis_loket, dokter, poli) 
       VALUES ($1, $2, $3, $4, $5) RETURNING *`, [nama, kode_antrian, jenis_loket, dokter, poli]
        );
        return new Response(JSON.stringify(result.rows[0]), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("POST Loket Error:", error.message);
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
}


// PUT: Update loket
export async function PUT(req) {
    const body = await req.json();
    const { nomor, nama, kode_antrian, jenis_loket, dokter, poli } = body;

    try {
        const result = await pool.query(
            `UPDATE lokets SET nama = $1, kode_antrian = $2, jenis_loket = $3, 
       dokter = $4, poli = $5 WHERE nomor = $6 RETURNING *`, [nama, kode_antrian, jenis_loket, dokter, poli, nomor]
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

// DELETE: Hapus loket
export async function DELETE(req) {
    const url = new URL(req.url);
    const nomor = url.searchParams.get("nomor");

    try {
        await pool.query(`DELETE FROM lokets WHERE nomor = $1`, [nomor]);
        return new Response(
            JSON.stringify({ message: "Loket berhasil dihapus" }), {
                status: 200,
            }
        );
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
        });
    }
}