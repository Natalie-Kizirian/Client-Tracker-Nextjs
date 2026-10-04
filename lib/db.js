// lib/db.js
import sql from "better-sqlite3";

const db = sql("clients.db");

db.prepare(
  `CREATE TABLE IF NOT EXISTS clients(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    note TEXT,
    status TEXT NOT NULL DEFAULT 'new')`,
).run();

export default db;
