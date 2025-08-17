const todos = require("../models/todoModel");

exports.CreateTasks = async (req, res) => {
  try {
    const tasks = new todos(req.body);
    await tasks.save();
    console.log("Task Added");
    res.status(201).json({ message: "Create a task", task: tasks });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "error", error: err.message });
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await todos.find();
    res.status(201).json({ message: "Showed the tasks", task: tasks });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "error", error: err.message });
  }
};

exports.deleteTasks = async (req, res) => {
  try {
    const tasks = await todos.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: "Deleted Successfully", task: tasks });
  } catch (err) {
    res.status(400).json({ message: "error", error: err.message });
    console.log("ERROR: ", err.message, "description", err);
  }
};

exports.updateTasks = async (req, res) => {
  try {
    console.log(req.params.id, req.body);
    const tasks = await todos.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({ message: "UPDATED sucessfully", task: tasks });
  } catch (err) {
    res
      .status(400)
      .json({ message: "error", error: err.message, description: err });
    console.log("ERROR: ", err.message, "description: ", err);
  }
};

exports.GetOneTask = async (req, res) => {
  try {
    const tasks = await todos.findById(req.params.id);
    res.status(201).json({ message: "found", task: tasks });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "ERROR", error: err.message });
  }
};
