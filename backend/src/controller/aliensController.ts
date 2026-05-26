import * as alienService from "../services/alienService.js";
import type { Request, Response, NextFunction } from "express";
import { join } from "node:path";

export const getAllAliens = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const aliens = await alienService.getAllAliens();
    res.status(200).json(aliens);
  } catch (err) {
    next(err);
  }
};

export const getAlienById = async (
  req: Request,
  res: Response,
  next: NextFunction,
): Promise<void> => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id) || id <= 0) {
      res.status(400).json({ error: "Invalid Alien ID" });
      return;
    }
    const alien = await alienService.getAlienById(id);
    if (!alien) {
      res.status(404).json({ error: "Alien not found" });
      return;
    }
    res.status(200).json(alien);
  } catch (err) {
    next(err);
  }
};

export const getAlienImage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    //Replace with validator middleware isValidAlienId(id)
    if (!id) {
      res.status(400).json({ error: "Alien ID required" });
      return;
    }

    const alien = await alienService.getAlienById(Number(id));
    if (!alien) {
      res.status(404).json({ error: `Alien with id "${id}" not found` });
      return;
    }
    const alienImgPath = join(
      import.meta.dirname,
      "../../public/images/Aliens/",
      `Alien-${id}.jpg`,
    );

    res.status(200).sendFile(alienImgPath);
  } catch (e) {
    next(e);
  }
};
