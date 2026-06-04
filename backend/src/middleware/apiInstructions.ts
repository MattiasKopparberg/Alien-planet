import type { Request, Response } from "express";

export const apiInstructions = (req: Request, res: Response) => {
  res.send("Welcome to the AlienPlanets API 👽");
};
