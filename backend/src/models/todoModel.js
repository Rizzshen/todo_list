const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema({
    task: {type: String , required: true},
    description: {type: String, default: "No Description Added"},
    completed: {type: Boolean, default: false},
    date: { type: Date,  default: Date.now },
    priority: { type: String, enum: ["High", "Low", "Medium"],  default: "Medium" },
    dueDate: {type: Date},
},{tiemeStamp: true});
module.exports = mongoose.model("Todos", todoSchema);