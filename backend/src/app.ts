import express from "express";
import cors from "cors";
import planetsRoute from "./routes/planets.js";
import aliensRoute from "./routes/aliens.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";

export const app = express();

app.use(
  cors({
    origin: "http://localhost:5173/", //To be replaced with variable
  }),
);

app.use(express.json());
app.use("/api/aliens", aliensRoute);
app.use("/api/planets", planetsRoute);

app.use(notFound);
app.use(errorHandler);
