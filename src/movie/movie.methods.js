const Movie = require("./movie.model");
const mongoose = require("mongoose");
const yargs = require("yargs");

exports.addMovie = async (movieObj) => {
  try {
    const newMovie = new Movie(movieObj);
    await newMovie.save();
    console.log(`${movieObj.title} successfully added to database`);
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async () => {
  try {
    const listMovie = await Movie.find({});
    console.log(listMovie);
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

exports.updateActor = async () => {
  try {
    const updatedCast = { title: yargs.argv.title };
    await Movie.findOneAndUpdate(updatedCast, { actor: yargs.argv.actor });
    console.log(`you've successfully updated the star of ${yargs.argv.title}!`);
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async () => {
  try {
    await Movie.deleteOne({ title: yargs.argv.title });
    console.log(
      `you've successfully removed ${yargs.argv.title} from the database`
    );
    mongoose.disconnect();
  } catch (error) {
    console.log(error);
  }
};
// if error.code=11000 then alert("you've been here before!!!!")
