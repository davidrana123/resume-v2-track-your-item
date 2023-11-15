import express from "express";
import {
  getTodos,
  addTodos,
  getTodosById,
  editTodos,
  deleteTodos,
} from "../controller/app-controller.js";

const router = express.Router();

router.get("/", getTodos);
router.post("/add", addTodos);
router.get("/:id", getTodosById);
router.put("/:id", editTodos);
router.delete("/:id", deleteTodos);

export default router;
