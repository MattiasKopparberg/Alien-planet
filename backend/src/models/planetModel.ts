import { query } from "../config/db.js";
import type { Planet } from "../types/types.js"


export const findAllPlanets = async () => {
  try {
    const planet = (await query(
      "SELECT * FROM planets ORDER BY planet_id",
    )) as Planet[];
    return planet;
  } catch (e) {
    console.error("Query failed in findAllplanets: ", e);
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