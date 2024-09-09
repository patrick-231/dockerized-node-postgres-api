import pkg from 'pg';
const { Pool } = pkg;

// Create the pool as before
const pool = new Pool({
  host: 'localhost',
  user: 'root',
  database: 'pgdb',
  password: 'password',
  port: 5432
});

export default pool;
