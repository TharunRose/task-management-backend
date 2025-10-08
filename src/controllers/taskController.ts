import { Request, Response } from "express";
import { db } from "../config/db";

export const createTask = async (req: Request, res: Response) => {
  const { title, description, priority, assignedUserId } = req.body;
  try {
    await db.query(
      "INSERT INTO tasks (title, description, status, priority, assignedUserId) VALUES (?, ?, 'Assigned', ?, ?)",
      [title, description, priority, assignedUserId]
    );
    res.json({ message: "Task created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

export const getAllTasks = async (_: Request, res: Response) => {
  try {
    const [rows] = await db.query(
      "SELECT t.*, u.name as assignedUserName FROM tasks t LEFT JOIN users u ON t.assignedUserId = u.id"
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getUserTasks = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const [rows] = await db.query("SELECT * FROM tasks WHERE assignedUserId = ?", [userId]);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, priority, assignedUserId, status } = req.body;

  try {
    await db.query(
      "UPDATE tasks SET title = ?, description = ?, priority = ?, assignedUserId = ?, status = ? WHERE id = ?",
      [title, description, priority, assignedUserId, status || "Assigned", id]
    );
    res.json({ message: "Task updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


export const updateTaskStatus = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    await db.query("UPDATE tasks SET status = ? WHERE id = ?", [status, id]);
    res.json({ message: "Task updated successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await db.query("DELETE FROM tasks WHERE id = ?", [id]);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
