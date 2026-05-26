import type { Request, Response, NextFunction } from "express";

const errorMessage = (e: Error) => {
  const env = process.env.NODE_ENV || null;

  if (env != "development") return "Internal server error";

  return e.message;
};

export const errorHandler = (
  e: Error & { statusCode?: number },
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (!e.statusCode) console.error(e);

  const statusCode = e.statusCode ?? 500;
  const message = errorMessage(e);
  res.status(statusCode).json({ error: message });
};
