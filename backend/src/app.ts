import express from "express";
import cors from "cors";
import planetsRoute from "./routes/planets.js";
import aliensRoute from "./routes/aliens.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { apiInstructions } from "./middleware/apiInstructions.js";

export const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "https://alien-planet.onrender.com"],
    methods: ["GET"],
  }),
);

app.use(express.json());
app.use("/api/aliens", aliensRoute);
app.use("/api/planets", planetsRoute);

app.use("/", apiInstructions);

app.use(notFound);
app.use(errorHandler);
