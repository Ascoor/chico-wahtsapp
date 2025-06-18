const mysql = require('mysql2/promise');
const fs = require('fs');

// Read database URL from environment variables
const DATABASE_URL = process.env.DATABASE_URL || '';

async function connect() {
  if (!DATABASE_URL) {
    throw new Error('DATABASE_URL environment variable is not set');
  }
  const connection = await mysql.createConnection(DATABASE_URL);
  return connection;
}

async function checkConnection() {
  try {
    const conn = await connect();
    await conn.query('SELECT 1');
    await conn.end();
    console.log('Database connection successful');
  } catch (err) {
    console.error('Database connection failed:', err.message);
  }
}

async function ensureTables() {
  const conn = await connect();
  const [rows] = await conn.query("SHOW TABLES");
  console.log('Existing tables:', rows.map(r => Object.values(r)[0]).join(', '));
  await conn.end();
}

async function seed() {
  const conn = await connect();
  const schemaSql = fs.readFileSync('src/database/schema.sql', 'utf8');
  for (const stmt of schemaSql.split(/;\s*\n/)) {
    if (stmt.trim()) {
      await conn.query(stmt);
    }
  }
  await conn.end();
  console.log('Database seeded');
}

async function query(table) {
  const conn = await connect();
  const [rows] = await conn.query(`SELECT * FROM \`${table}\``);
  await conn.end();
  console.log(JSON.stringify(rows, null, 2));
}

async function main() {
  const cmd = process.argv[2];
  if (cmd === 'check') return checkConnection();
  if (cmd === 'seed') return seed();
  if (cmd === 'tables') return ensureTables();
  if (cmd === 'query') {
    const table = process.argv[3];
    if (!table) return console.error('Specify table to query');
    return query(table);
  }
  console.log('Commands: check, seed, tables, query <table>');
}

main();
