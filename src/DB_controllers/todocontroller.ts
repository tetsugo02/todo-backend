import { Request, Response } from "express";
import Todos from "../models/Todos";

export async function getTodos(req: Request, res: Response): Promise<void> {
  try {
    const todos = await Todos.find();
    res.json({ todos });
  } catch (error) {
    res.status(500).json({ message: "Error fetching todos" });
  }
}

export async function createTodo(req: Request, res: Response): Promise<void> {
  try {
    const { name, description, completed } = req.body;
    const newTodo = new Todos({ name, description, completed });
    await newTodo.save();
    res.status(201).json({ message: "Todo created" });
  } catch (error) {
    res.status(500).json({ message: "Error creating todo" });
  }
}
