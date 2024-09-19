import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import todoRoutes from "./routes/todo";

const app: Application = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());
app.use(cors());
app.use(" /api/todos", todoRoutes);
mongoose.connect("mongodb://localhost:27017/express-mongo");

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
