import { Router } from "express";
import Todos from "../models/Todos";
import { getTodos, createTodo, updateTodo, deleteTodo, getTodoById } from "../DB_controllers/todocontroller";
const router = Router();

router.get("/", getTodos);
router.get("/:id", getTodoById); //指定idのtodoを取得
router.post("/", createTodo);
router.put("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
