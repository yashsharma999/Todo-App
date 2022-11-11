import express from "express";
import tasksRouter from "./routes/tasks.js";

const app = express();

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/tasks", tasksRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
