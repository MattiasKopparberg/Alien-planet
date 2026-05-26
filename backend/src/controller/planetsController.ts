import type { Request, Response, NextFunction } from "express";
import { join } from "node:path";
import * as planetService from "../services/planetService.js"

export const getAllPlanets = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const planets = await planetService.getAllPlanets();
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

    // const planet = await planetService.getPlanetById(Number(id));
    // if (!planet) {
    //   res.status(404).json({ error: `Planet with id "${id}" not found` });
    //   return;
    // }
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
