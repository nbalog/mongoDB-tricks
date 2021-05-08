const Movie = require("../models/movie");

exports.and = (req, res, next) => {
  const movieQuery = Movie.find({
    $and: [
      {
        name: {$eq:"Inception"}
      },
      {
        quantity: {$gte: 7}
      }
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

exports.or = (req, res, next) => {
  const movieQuery = Movie.find({
    $or: [
      {
        name: {$eq: "Xmen"}
      },
      {
        quantity: {$gte: 78}
      }
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

exports.nor = (req, res, next) => {
  const movieQuery = Movie.find({
    $nor: [
      {
        name: {$eq: "Source code"}
      },
      {
        quantity: {$gte: 78}
      }
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

exports.not = (req, res, next) => {
  const movieQuery = Movie.find({
    quantity: {$not: {$gte: 77}}
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