import type { Request, Response } from "express";

export const notFound = (req: Request, res: Response) => {
  const { originalUrl } = req;
  res.status(404).json({
    error: `The endpoint \'${originalUrl}\' is not recognized by the server`,
  });
};
