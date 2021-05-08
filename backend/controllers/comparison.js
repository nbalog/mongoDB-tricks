const Movie = require("../models/movie");

/*Equal*/
exports.eq = (req, res, next) => {
  const movieQuery = Movie.findOne({
    name: {$eq: "Terminator"}
  });
  let fetchedMovies;
  movieQuery
    .then(documents => {
      fetchedMovies = documents;
    })
    .then(count => {
      res.status(200).json(fetchedMovies);
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching movies failed!"
      });
    });
};

/*Greater then and greater and equal to*/
exports.gt = (req, res, next) => {
  const movieQuery = Movie.findOne({
    quantity: {$gt: 9}
  });
  let fetchedMovies;
  movieQuery
    .then(documents => {
      fetchedMovies = documents;
    })
    .then(count => {
      res.status(200).json(fetchedMovies);
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching movies failed!"
      });
    });
};

exports.gte = (req, res, next) => {
  const movieQuery = Movie.findOne({
    quantity: {$gte: 9}
  });
  let fetchedMovies;
  movieQuery
    .then(documents => {
      fetchedMovies = documents;
    })
    .then(count => {
      res.status(200).json(fetchedMovies);
    })
    .catch(error => {
      res.status(500).json({
        message: "Fetching movies failed!"
      });
    });
};

