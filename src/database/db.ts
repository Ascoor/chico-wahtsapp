import mysql from 'mysql2/promise';
import { env } from '@/config/env';

export async function getConnection() {
  if (!env.DATABASE_URL) {
    throw new Error('DATABASE_URL not configured');
  }
  return mysql.createConnection(env.DATABASE_URL);
}

export async function fetchAll(table: string) {
  const conn = await getConnection();
  const [rows] = await conn.query(`SELECT * FROM \`${table}\``);
  await conn.end();
  return rows as any[];
}

export async function insert(table: string, data: Record<string, any>) {
  const conn = await getConnection();
  const [result] = await conn.query(`INSERT INTO \`${table}\` SET ?`, [data]);
  await conn.end();
  return result;
}

export async function updateById(table: string, id: number, data: Record<string, any>) {
  const conn = await getConnection();
  const [result] = await conn.query(`UPDATE \`${table}\` SET ? WHERE id=?`, [data, id]);
  await conn.end();
  return result;
}

export async function deleteById(table: string, id: number) {
  const conn = await getConnection();
  const [result] = await conn.query(`DELETE FROM \`${table}\` WHERE id=?`, [id]);
  await conn.end();
  return result;
}
