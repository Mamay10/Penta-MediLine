import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { nik, doctor, clinic } = req.body;

    try {
      const query = `
        INSERT INTO non_bpjs_registrations (nik, doctor, clinic)
        VALUES ($1, $2, $3)
        RETURNING *
      `;
      const values = [nik, doctor, clinic];
      const result = await pool.query(query, values);

      res.status(200).json({ success: true, data: result.rows[0] });
    } catch (error) {
      console.error('Error registering Non-BPJS:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
