import express from "express"
import { 
    getAllAliens,
    getAlienById,
    // getAlienImage
    // createAlien,
    // updateAlien,
    // deleteAlien,
} from "../controller/aliensController.js"

const router = express.Router();

router.get("/", getAllAliens)
// router.get("/:id/image", getAlienImage)
router.get("/:id", getAlienById)