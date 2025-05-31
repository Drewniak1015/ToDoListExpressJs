const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();
const Tasks = require("./models/Task");
app.use(express.static("public"));
app.use(express.static("images"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // aby działał post z formularza
app.use(express.json()); // aby dorwać sie do body
mongoose
  .connect("mongodb://localhost/ToDoList")
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.log(err));

const TasksRoute = require("./routes/Tasks");
app.use("/Tasks", TasksRoute);
const EditRoute = require("./routes/Edit");
app.use("/Edit", EditRoute);
app.get("/", async (req, res) => {
  try {
    const TaskList = await Tasks.find();
    res.render("ToDoList", { TaskList: TaskList });
  } catch (err) {
    res.status(500).json({ error: "nie udalo sie pobrac danych" });
  }
});

app.listen(3000);
