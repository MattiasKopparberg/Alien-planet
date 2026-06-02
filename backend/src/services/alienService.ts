import * as alienModel from "../models/alienModel.js"
import type { Alien, Aggression } from "../types/types.js"

export const getAllAliens = async (
  aggression?: string,
  habitat?: string,
): Promise<Alien[]> => {
  return await alienModel.findAllAliens({
    aggression,
    habitat,
  });
};

export const getAlienById = async (
  id: number,
): Promise<Alien | null> => {
  return await alienModel.findAlienById(id);
};

export const getAlienByAggression = async (
    aggression: Aggression,
): Promise<Alien[]> => {
    return await alienModel.findAlienByAggression(aggression);
};