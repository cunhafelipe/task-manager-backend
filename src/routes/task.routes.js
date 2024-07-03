const express = require("express");

const TaskController = require("../controllers/task.controller");
const taskModel = require("../models/task.model");

const router = express.Router();

router.get("/", async (req, res) => {
    return new TaskController(req, res).getAll();
});

router.get("/:id", async (req, res) => {
    return new TaskController(req, res).getById();
});

router.post("/", async (req, res) => {
    return new TaskController(req, res).post();
});

router.patch("/:id", async (req, res) => {
    return new TaskController(req, res).patch();
});

router.delete("/:id", async (req, res) => {
    return new TaskController(req, res).delete();
});

module.exports = router;
