import Task from "../models/Tasks.js";

const getAllTasks = async (req, res) => {
  res.send("List of all the tasks...");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getTask = async (req, res) => {
  res.send("Get a task...");
};

const updateTask = async (req, res) => {
  res.send("Update a task...");
};

const deleteTask = async (req, res) => {
  res.send("Delete a task...");
};

export { getAllTasks, createTask, getTask, updateTask, deleteTask };
