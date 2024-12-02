// pages/api/db.js
import { Pool } from 'pg';

const pool = new Pool({
  user: 'postgres', // sesuaikan dengan user PostgreSQL Anda
  host: 'localhost', // atau alamat server PostgreSQL Anda
  database: 'mediLine',
  password: '123456', // sesuaikan dengan password PostgreSQL Anda
  port: 5432,
});

export default pool;