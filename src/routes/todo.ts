import { Router } from "express";
import Todos from "../models/Todos";
import { getTodos, createTodo } from "../DB_controllers/todocontroller";
const router = Router();

router.get("/", getTodos);
router.post("/", createTodo);

export default router;
