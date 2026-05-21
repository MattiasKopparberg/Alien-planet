import express from "express";
// import planetsRoute from "./routes/planetsRoute"
// import aliensRoute from "./routes/aliensRoute"

export const app = express();

app.use(express.json())
// app.use("/aliens/", aliensRoute)
// app.use("/planets", planetsRoute)
app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});
