const Movie = require("../models/movie");

exports.and = (req, res, next) => {
  const movieQuery = Movie.find({
    $and: [{name: {$eq:"Inception"}},{quantity: {$gte: 7}}]
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