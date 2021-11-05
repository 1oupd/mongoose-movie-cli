const Movie = require("./movie.model");
const mongoose = require("mongoose");

exports.addMovie = async (movieObj) => {
  try {
    const newMovie = new Movie(movieObj);
    await newMovie.save();
    mongoose.disconnect();
    console.log("Movie successfully added to db");
  } catch (error) {
    console.log(error);
  }
};

// if error.code=11000 then alert("you've been here before!!!!")
