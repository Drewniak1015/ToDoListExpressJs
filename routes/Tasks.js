const express = require("express");
const router = express.Router();
const Tasks = require("../models/Task");

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    await Tasks.deleteOne({ _id: id });
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});
router.get("/", async (req, res) => {
  try {
    const TaskList = await Tasks.find();
    res.json(TaskList);
  } catch (err) {
    res.status(500).json({ error: "nie udalo sie pobrac danych" });
  }
});

router.post("/", async (req, res) => {
  try {
    const Task = new Tasks({ Title: req.body.NewTask });
    const savedTask = await Task.save();
    res.redirect("/");
    res.status(201).json(savedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
