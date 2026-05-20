import express from "express"
import { 
    getAliens,
    getAlienById,
    getAlienImage
    // createAlien,
    // updateAlien,
    // deleteAlien,
} from "../controller/AliensController.js"

const router = express.Router();

router.get("/", getAliens)
router.get("/:id", getAlienImage)
router.get("/:id", getAlienById)