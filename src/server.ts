import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";

const app: Application = express();
const PORT = process.env.PORT || 5001;
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/express-mongo");

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
