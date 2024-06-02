import sqlite3 from "sqlite3";
import { open, Database } from "sqlite";

export async function openDb(): Promise<Database> {
  const db = await open({
    filename: "./sqlite.db",
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS accounts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT,
    password TEXT NOT NULL,
    birthday DATE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_modified DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  return db;
}
