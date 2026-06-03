import mysql from "mysql2/promise";
import type { RowDataPacket } from "mysql2/promise";
import "dotenv/config";

const dbConfig: mysql.PoolOptions = {
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "alienplanets",
  port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

export const db = mysql.createPool(dbConfig);

export const query = async <T>(
  sql: string,
  params?: any[],
): Promise<T> => {
  try {
    const [rows] = await db.execute(sql, params);
    return rows as T;
  } catch (e) {
    console.error("Database error: ", e);
    throw e;
  }
};
