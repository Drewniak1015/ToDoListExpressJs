const express = require("express");
const router = express.Router();
const Tasks = require("../models/Task");
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const Task = await Tasks.findById(id);
    res.render("EditNote", { value: Task.Title });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});
router.post("/:id", async (req, res) => {
  const id = req.params.id;
  const NewValue = req.body.NewValue;
  try {
    await Tasks.findByIdAndUpdate(id, {
      Title: NewValue,
    });
    res.redirect("/");
  } catch (er) {
    res.status(400).json({ error: er });
  }
});

module.exports = router;
