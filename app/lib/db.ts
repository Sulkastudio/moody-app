import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { items } from "./schema";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, {
  schema: {
    items,
  },
});

let initialized = false;

export async function ensureDb() {
  if (initialized) return;

  await pool.query(`
    CREATE TABLE IF NOT EXISTS items (
      id TEXT PRIMARY KEY,
      user_id TEXT NOT NULL,
      type TEXT NOT NULL,
      data TEXT NOT NULL,
      metadata JSONB,
      blob_key TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );

    CREATE INDEX IF NOT EXISTS idx_items_user_created_at
      ON items (user_id, created_at DESC);
  `);

  initialized = true;
}

