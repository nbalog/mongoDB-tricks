const Movie = require("../models/movie");

exports.comment = (req, res, next) => {
  const movieQuery = Movie.find({
    "quantity": { $eq: 12}, $comment: "Find 12 movies on warehouse"}
  );
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