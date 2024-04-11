import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsers } from "../controllers/userController.js";

const router = express.Router();

router.get("/getFilteredUsers", protectRoute, getUsers);

export default router;
