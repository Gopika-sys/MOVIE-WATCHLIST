const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  id: Number,
  title: String,
  year: Number,
  genre: [String],
  rating: Number,
  description: String,
  poster: String,
  popular: Boolean,
  trending: Boolean
});

module.exports = mongoose.model("Movie", movieSchema);