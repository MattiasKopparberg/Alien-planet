import * as alienModel from "../models/alienModel.js";
import type {
  Alien,
  Aggression,
  Habitat,
  AlienFilters,
} from "../types/types.js";

export const getAllAliens = async (
  aggression?: Aggression,
  habitat?: Habitat,
): Promise<Alien[]> => {
  const args: AlienFilters = {};
  if (aggression) args.aggression = aggression;
  if (habitat) args.habitat = habitat;

  return await alienModel.findAllAliens(args);
};

export const getAlienById = async (id: number): Promise<Alien | null> => {
  return await alienModel.findAlienById(id);
};

export const getAlienByAggression = async (
  aggression: Aggression,
): Promise<Alien[]> => {
  return await alienModel.findAlienByAggression(aggression);
};

export const getAliensByPlanet = async (id: number): Promise<Alien[]> => {
  return await alienModel.findAliensByPlanet(id);
};
