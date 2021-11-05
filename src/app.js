require("./db/connection");
const {
  addMovie,
  listMovies,
  updateActor,
  deleteMovie,
} = require("./movie/movie.methods");
// if you used imports.function then import with curlies
const yargs = require("yargs");

const app = () => {
  if (process.argv[2] === "add") {
    //add movie, actor, genre then notable quote to mongodb
    addMovie({
      title: yargs.argv.title,
      actor: yargs.argv.actor,
      genre: yargs.argv.genre,
      quote: yargs.argv.quote,
    });
  } else if (process.argv[2] === "list") {
    listMovies({ title: yargs.argv.title });
  } else if (process.argv[2] === "update") {
    updateActor({ title: yargs.argv.title, actor: yargs.argv.actor });
  } else if (process.argv[2] === "delete") {
    deleteMovie({ title: yargs.argv.title });
  }
};

app();

//cli:
// node src/app.js "add" --title="superman --actor="will smith"
// index = index of command you're focussing on
