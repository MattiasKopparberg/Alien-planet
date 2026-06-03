import type { Planet, } from "../types/types.js";
import * as planetModel from "../models/planetModel.js"
import type { PlanetFilters } from "../types/types.js";

export const getAllPlanets = async (
  filters: PlanetFilters = {},
): Promise<Planet[]> => {
  return planetModel.findAllPlanets(filters);
};

export const getPlanetById = async (
  id: number,
): Promise<Planet | null> => {
  return await planetModel.findPlanetById(id);
};
