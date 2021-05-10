const Movie = require("../models/movie");

exports.all = (req, res, next) => {
  const movieQuery = Movie.find({
    "category": { $all: ["action", "thriller"]}
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

exports.size = (req, res, next) => {
  const movieQuery = Movie.find({
    "category": { $size: 2 }
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

exports.elemMatch = (req, res, next) => {
  const movieQuery = Movie.find({
    "category": { $elemMatch: {$regex: "thri"}}
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

