import express from "express";
import {
  getAllPlanets,
  getPlanetById,
  getPlanetImage,
  getPlanetInhabitants,
  // createPlanet,
  // updatePlanet,
  // deletePlanet,
} from "../controller/planetsController.js";

const router = express.Router();

router.get("/", getAllPlanets);
router.get("/:id/image", getPlanetImage);
router.get("/:id", getPlanetById);
router.get("/:id/aliens", getPlanetInhabitants);

export default router;
