const Movie = require("../models/movie");

exports.jsonSchema = (req, res, next) => {
  let promoschema = {
    bsonType: "object",
    properties: {
      "name": {bsonType: "string"},
      "quantity": {bsonType: "number"}
    }
  }
  const movieQuery = Movie.find({
    $jsonSchema: promoschema
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

exports.mod = (req, res, next) => {
  const movieQuery = Movie.find({
    "quantity": {$mod: [4, 0]}
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

exports.regex = (req, res, next) => {
  const movieQuery = Movie.find({
    "name": {$regex: "Inc"}
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

exports.text = (req, res, next) => {
  const movieQuery = Movie.find({
    "name": "Inception"
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

exports.where = (req, res, next) => {
  const movieQuery = Movie.find({
    $where: function() { 
      return (this._id == "60952024a2f2bb93d50967c3")
  }});
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