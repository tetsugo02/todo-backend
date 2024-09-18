import { ITodo } from "../types/ITodo";
import { model, Schema } from "mongoose";

// This is the schema that we will use to create a new document in the Todos collection.
const todoSchema = new Schema<ITodo>({
  name: { type: String, required: true },
  description: { type: String },
  completed: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model<ITodo>("Todo", todoSchema);
