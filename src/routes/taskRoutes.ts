import express from "express";
import { protect } from "../middleware/authMiddleware";
import {
  createTask,
  getAllTasks,
  getUserTasks,
  updateTaskStatus,
  deleteTask,
  updateTask,
} from "../controllers/taskController";

const router = express.Router();

router.post("/create", protect, createTask);
router.get("/getAll", protect, getAllTasks);
router.get("/user/:userId", protect, getUserTasks);
router.put("/update/:id", protect, updateTask); 
router.put("/status/:id", protect, updateTaskStatus); 
router.delete("/delete/:id", protect, deleteTask);

export default router;
