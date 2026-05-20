import express from "express";
// import planetsRoute from "./routes/planetsRoute"
// import aliensRoute from "./routes/aliensRoute"

export const app = express();

app.use(express.json())
// app.use("/aliens/", aliensRoute)
// app.use("/planets", planetsRoute)
app.get("/", (req,res) => {
    console.log({message: "API is running"})
})
