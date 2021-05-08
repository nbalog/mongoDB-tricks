const Movie = require("../models/movie");

exports.exists = (req, res, next) => {
  const movieQuery = Movie.find({
    $and: [
      {
        name: {$exists: true }
      },
    ]
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