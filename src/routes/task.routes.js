const express = require("express");
const taskModel = require("../models/task.model");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const tasks = await taskModel.find({});
        res.status(200).send(tasks);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get("/:id", async (req, res) => {
    try {
        const taskId = req.params.id;
        const task = await taskModel.findById(taskId);

        if (!task) {
            return res.status(404).send("Task not found");
        }

        res.status(200).send(task);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const newTask = new taskModel(req.body);
        await newTask.save();

        res.status(201).send(newTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.patch("/:id", async (req, res) => {
    try {
        const taskId = req.params.id;
        const taskData = req.body;

        const taskToUpdate = await taskModel.findById(taskId);

        const allowedUpdates = ["isCompleted"];
        const noRequestUpdates = Object.keys(req.body);

        for (update of noRequestUpdates) {
            if (allowedUpdates.includes(update)) {
                taskToUpdate[update] = taskData[update];
            } else {
                return res
                    .status(500)
                    .send("Um ou mais campos não são editáveis");
            }
        }
        await taskToUpdate.save();
        return res.status(200).send(taskToUpdate);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const taksId = req.params.id;
        const taskToDelete = await taskModel.findById(taksId);

        if (!taskToDelete) {
            return res.status(404).send("Task not found");
        }
        const deleteTask = await taskModel.findByIdAndDelete(taksId);

        res.status(200).send(deleteTask);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
