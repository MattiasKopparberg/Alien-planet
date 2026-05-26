import express from "express";
import {
  getAllPlanets,
  getPlanetById,
  getPlanetImage,
  // createPlanet,
  // updatePlanet,
  // deletePlanet,
} from "../controller/planetsController.js";

const router = express.Router();

router.get("/", getAllPlanets);
router.get("/:id/image", getPlanetImage);
router.get("/:id", getPlanetById);

export default router;
