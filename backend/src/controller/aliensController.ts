import * as alienService from "../services/alienService.js";
import type { Request, Response, NextFunction } from "express";

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
    if(isNaN(id) || id <= 0) {
      res.status(400).json({ error: "Invalid Alien ID"})
      return
    }
    const alien = await alienService.getAlienById(id)
    if (!alien) {
      res.status(404).json({ error: "Alien not found"});
      return
    }
    res.status(200).json(alien)
  } catch (err) {
    next(err);
  }
};