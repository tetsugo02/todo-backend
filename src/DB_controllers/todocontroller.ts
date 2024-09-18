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
export async function getTodoById(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const todo = await Todos.findById(id);
    if (!todo) {
      res.status(404).json({ message: "Todo not found" });
    }
    res.json({ todo });
  } catch (error) {
    res.status(500).json({ message: "Error fetching todo" });
  }
}

export async function createTodo(req: Request, res: Response): Promise<void> {
  try {
    const { name, description, completed } = req.body;
    const newTodo = new Todos({ name, description, completed });
    const savedTodo = await newTodo.save();
    res.status(201).json({ message: `Todo created:${savedTodo}` });
  } catch (error) {
    res.status(500).json({ message: "Error creating todo" });
  }
}

export async function updateTodo(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const { name, description, completed } = req.body;
    const updatedTodo = await Todos.findByIdAndUpdate(id, {
      name,
      description,
      completed,
    });

    if (!updateTodo) {
      res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo updated", updatedTodo });
  } catch (error) {
    res.status(500).json({ message: "Error updating todo" });
  }
}

export async function deleteTodo(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const deletedTodo = await Todos.findByIdAndDelete(id);

    if (!deletedTodo) {
      res.status(404).json({ message: "Todo not found" });
    }
    res.json({ message: "Todo deleted", deletedTodo });
  } catch (error) {
    res.status(500).json({ message: "Error deleting todo" });
  }
}
