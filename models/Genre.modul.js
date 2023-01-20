const mongoose = require("mongoose");

const genreSchema = mongoose.Schema({
  name: String,
  text: String,
});

const Genres = mongoose.model("Genre", genreSchema);
module.exports = Genres;
