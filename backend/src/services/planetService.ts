import type { Planet, } from "../types/types.js";
import * as planetModel from "../models/planetModel.js"

export const getAllPlanets = async (): Promise<Planet[]> => {
    return await planetModel.findAllPlanets();
}

export const getPlanetById = async (
  id: number,
): Promise<Planet | null> => {
  return await planetModel.findPlanetById(id);
};
