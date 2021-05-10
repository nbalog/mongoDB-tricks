const Movie = require("../models/movie");

exports.exists = (req, res, next) => {
  const movieQuery = Movie.find({
    name: {$exists: true }
  });
  let fetchedMovies;
  movieQuery
    .then(documents => {
      fetchedMovies = documents;
      res.status(200).json(fetchedMovies);   
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching movies failed!"
      });
    });
};

exports.typeOf = (req, res, next) => {
  const movieQuery = Movie.find({
    quantity: {$type: "number"}
  });
  let fetchedMovies;
  movieQuery
    .then(documents => {
      fetchedMovies = documents;
      res.status(200).json(fetchedMovies);   
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching movies failed!"
      });
    });
};