import { query } from "../config/db.js";
import type { Planet, PlanetFilters } from "../types/types.js"


export const findAllPlanets = async (
  filters: PlanetFilters = {},
): Promise<Planet[]> => {
  try {
    let sql = "SELECT * FROM planets";
    const conditions: string[] = [];
    const values: any[] = [];

    if (filters.name) {
      conditions.push("name LIKE ?");
      values.push(`%${filters.name}%`);
    }

    if (filters.min_temp !== undefined) {
      conditions.push("avg_temp >= ?");
      values.push(filters.min_temp);
    }

    if (filters.max_temp !== undefined) {
      conditions.push("avg_temp <= ?");
      values.push(filters.max_temp);
    }

    if (conditions.length > 0) {
      sql += " WHERE " + conditions.join(" AND ");
    }

    sql += " ORDER BY planet_id";

    const planets = await query<Planet[]>(sql, values);

    return planets;
  } catch (e) {
    console.error("Query failed in findAllPlanets:", e);
    throw e;
  }
};

export const findPlanetById = async (id: number): Promise<Planet | null> => {
  try {
    const planets = (await query("SELECT * FROM planets WHERE planet_id = ?", [
      id,
    ])) as Planet[];
     return planets[0] ?? null;
  } catch (e) {
    console.error("Query failed in findPlanetById: ", e);
    throw e;
  }
};