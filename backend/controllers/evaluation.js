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