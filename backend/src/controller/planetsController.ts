import type { Request, Response, NextFunction } from "express";
import { join } from "node:path";

export const getPlanetById = () => {};

export const getPlanets = () => {};

export const getPlanetImage = async (
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

    // const planet = await planetService.getAlienById(Number(id));
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
