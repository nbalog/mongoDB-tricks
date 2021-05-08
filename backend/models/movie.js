const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
  name: { type: String },
  quantity: { type: Number },
});

module.exports = mongoose.model("Movies", movieSchema);
