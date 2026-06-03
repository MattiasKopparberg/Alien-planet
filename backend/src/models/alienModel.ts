import { query } from "../config/db.js";
import type { Alien, Aggression, AlienFilters } from "../types/types.js";

export const findAllAliens = async (
  filters: AlienFilters = {},
): Promise<Alien[]> => {
  try {
    let sql = "SELECT * FROM aliens";
    const values: any[] = [];
    const conditions: string[] = [];

    if (filters.aggression) {
      values.push(filters.aggression);
      conditions.push(`aggression = ?`);
    }

    if (filters.habitat) {
      values.push(filters.habitat);
      conditions.push(`habitat = ?`);
    }

    if (conditions.length > 0) {
      sql += " WHERE " + conditions.join(" AND ");
    }

    sql += " ORDER BY alien_id";

    const aliens = (await query(sql, values)) as Alien[];

    return aliens;
  } catch (e) {
    console.error("Query failed in findAllAliens:", e);
    throw e;
  }
};

export const findAlienById = async (id: number): Promise<Alien | null> => {
  try {
    const aliens = (await query("SELECT * FROM aliens WHERE alien_id = ?", [
      id,
    ])) as Alien[];
    return aliens[0] ?? null;
  } catch (e) {
    console.error("Query failed in findAlienById: ", e);
    throw e;
  }
};

export const findAlienByAggression = async (aggression: Aggression) => {
  try {
    const aliens = (await query("SELECT * FROM aliens WHERE aggression = ?", [
      aggression,
    ])) as Alien[];
    return aliens;
  } catch (e) {
    console.error("Query failed in findAlienByAggression: ", e);
    throw e;
  }
};

export const findAliensByPlanet = async (id: number) => {
  try {
    const aliens = (await query("SELECT * FROM aliens WHERE planet_id = ?", [
      id,
    ])) as Alien[];
    return aliens;
  } catch (e) {
    console.error("Query failed in findAliensByPlanet: ", e);
    throw e;
  }
};
