import express from "express";
import { getMessages, sendMessage } from "../controllers/messagesController.js";
import protectRoute from "../middleware/protectRoute.js";


const router = express.Router();

router.get("/receive/:id",protectRoute, getMessages);
router.post("/send/:id",protectRoute, sendMessage);


export default router;
