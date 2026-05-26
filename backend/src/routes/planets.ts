import express from "express";
import {
  getPlanets,
  getPlanetById,
  // getPlanetImage
  // createPlanet,
  // updatePlanet,
  // deletePlanet,
} from "../controller/planetsController.js";

// const router = express.Router();

router.get("/", getPlanets);
// router.get("/:id/image", getPlanetImage)
router.get("/:id", getPlanetById);
