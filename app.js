import express from "express";
import tasksRouter from "./routes/tasks.js";
import connectDB from "./db/connect.js";
import env from "dotenv";

//env config
env.config();

const app = express();

//middleware
app.use(express.json());

//routes
app.use("/api/v1/tasks", tasksRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(3000, console.log("Server is listening on port: 3000..."));
  } catch (error) {
    console.log(error);
  }
};

start();
