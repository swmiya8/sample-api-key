const express = require("express");
const app = express();
//trigger
app.get("/users", (req, res) => {
  res.json({ users: [] });
});
//trigger
app.post("/users", (req, res) => {
  res.json({ message: "User created" });
});
//trigger
app.put("/users/:id", (req, res) => {
  res.json({ message: "User updated" });
});

app.delete("/users/:id", (req, res) => {
  res.json({ message: "User deleted" });
});
//trigger
module.exports = app;
