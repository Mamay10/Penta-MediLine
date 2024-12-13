// pages/api/db.js
import { Pool } from 'pg';

const pool = new Pool({
    user: 'postgres', // sesuaikan dengan user PostgreSQL 
    host: 'localhost', // atau alamat server PostgreSQL 
    database: 'mediline',
    password: '12345678', // sesuaikan dengan password PostgreSQL 
    port: 5432,
});


export default pool;