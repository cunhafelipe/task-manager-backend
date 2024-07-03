const express = require("express");

const TaskController = require("../controllers/task.controller");
const taskModel = require("../models/task.model");

const router = express.Router();

router.get("/", async (req, res) => {
    return new TaskController(req, res).getTask();
});

router.get("/:id", async (req, res) => {
    return new TaskController(req, res).getTaskById();
});

router.post("/", async (req, res) => {
    return new TaskController(req, res).postTask();
});

router.patch("/:id", async (req, res) => {
    return new TaskController(req, res).patchTask();
});

router.delete("/:id", async (req, res) => {
    return new TaskController(req, res).deleteTask();
});

module.exports = router;
