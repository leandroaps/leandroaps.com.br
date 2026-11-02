// Applies db/schema.sql to the database in DATABASE_URL (idempotent).
// Usage: npm run db:migrate
import { readFileSync } from "node:fs";
import { Pool } from "@neondatabase/serverless";

try {
  process.loadEnvFile();
} catch {
  // no .env file — rely on the environment
}

const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL is not set");

const schema = readFileSync(new URL("../db/schema.sql", import.meta.url), "utf8");
const pool = new Pool({ connectionString: url });

try {
  await pool.query(schema);
  console.log("Schema applied.");
} finally {
  await pool.end();
}
