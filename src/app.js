require("./db/connection");
const { addMovie } = require("./movie/movie.methods");
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
  }
};

app();

//cli:
// node src/app.js "add" --title="superman --actor="will smith"
// index = index of command you're focussing on
