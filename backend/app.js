const express = require("express");
const mongoose = require("mongoose");

const comparisonRoutes = require("./routes/comparison");
const logicalRoutes = require("./routes/logical");
const elementRoutes = require("./routes/element");
const evaluationRoutes = require("./routes/evaluation");
const arrayRoutes = require("./routes/array");
const commentRoutes = require("./routes/comment");

const app = express();

mongoose
  .connect(
    "mongodb://localhost:27017/mongoDB-tricks"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/comparison", comparisonRoutes);
app.use("/api/logical", logicalRoutes);
app.use("/api/element", elementRoutes);
app.use("/api/evaluation", evaluationRoutes);
app.use("/api/array", arrayRoutes);
app.use("/api/comment", commentRoutes);

module.exports = app;
