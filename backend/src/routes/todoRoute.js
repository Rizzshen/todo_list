const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todoControllers")

router.post("/", todosController.CreateTasks);
router.get("/", todosController.getTasks);
router.delete("/:id", todosController.deleteTasks);
router.put("/:id", todosController.updateTasks);
router.get("/:id", todosController.GetOneTask)
module.exports = router;