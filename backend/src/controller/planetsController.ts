import type { Request, Response, NextFunction } from "express";
import type { PlanetFilters } from "../types/types.js";
import { join } from "node:path";
import * as planetService from "../services/planetService.js";
import * as alienService from "../services/alienService.js";

export const getAllPlanets = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const { name, min_temp, max_temp } = req.query;

    const planets = await planetService.getAllPlanets({
      name: name as string | undefined,
      min_temp: min_temp ? Number(min_temp) : undefined,
      max_temp: max_temp ? Number(max_temp) : undefined,
    });

    res.status(200).json(planets);
  } catch (err) {
    next(err);
  }
};

export const getPlanetById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) {
      res.status(400).json({ error: "Invalid Planet ID" });
      return;
    }
    const planets = await planetService.getPlanetById(id);
    if (!planets) {
      res.status(404).json({ error: "planet not found" });
      return;
    }
    res.status(200).json(planets);
  } catch (err) {
    next(err);
  }
};

export const getPlanetImage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    //Replace with validator middleware isValidPlanetnId(id)
    if (!id) {
      res.status(400).json({ error: "Planet ID required" });
      return;
    }

    const planetImgPath = join(
      import.meta.dirname,
      "../../public/images/Planets/",
      `Planet-${id}.jpg`,
    );

    res.status(200).sendFile(planetImgPath);
  } catch (e) {
    next(e);
  }
};

export const getPlanetInhabitants = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) {
      res.status(400).json({ error: "Invalid Planet ID" });
      return;
    }
    const aliens = await alienService.getAliensByPlanet(id);
    if (!aliens) {
      res.status(404).json({ error: "No aliens found" });
      return;
    }
    res.status(200).json(aliens);
  } catch (err) {
    next(err);
  }
};
