import express from "express";
import { register, login, getAllUsers } from "../controllers/authController";
import { protect } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", protect, getAllUsers);
export default router;
