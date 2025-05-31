const mongoose = require("mongoose");

const Tasks = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Task", Tasks);
