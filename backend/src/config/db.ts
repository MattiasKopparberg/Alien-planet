import mysql from "mysql2/promise";
import "dotenv/config";

export const db = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  database: "alienplanets",

  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export const query = async (sql: string, params?: any[]) => {
  try {
    const [rows] = await db.execute(sql, params);
    return rows;
  } catch (e) {
    console.error("Database error: ", e);
    throw e;
  }
};
