import express from "express";
import planetsRoute from "./routes/planets.js";
import aliensRoute from "./routes/aliens.js";

export const app = express();

app.use(express.json());
app.use("/aliens", aliensRoute);
app.use("/planets", planetsRoute);
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

//404

//error handling middleware
