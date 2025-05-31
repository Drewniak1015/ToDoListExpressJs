const mongoose = require("mongoose");

const Tasks = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  checked: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Task", Tasks);
