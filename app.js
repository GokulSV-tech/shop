const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to ShopEasy from Gokul!");
});

const server = app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = { app, server }; 