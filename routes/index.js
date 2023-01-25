const express = require('express');
const hbs = require('hbs');
hbs.registerPartials(__dirname + "/views/partials");
const movies = require('../seeds/movies.seed');
const router = express.Router();
const Movie = require("../models/Movie.model");

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

/* GET all movies page */
router.get("/movies", async (req, res, next) => {
  try {
    const movies = await Movie.find({});
    res.render("movies", {movies});
  } catch (error) {
    next(error);
  }
});

/* GET a movie page */
router.get("/movies/:movieId", async (req, res, next) => {
  const { movieId } = req.params;
  try {
    const movie = await Movie.findById(movieId);
    res.render("movie", movie);
  } catch (error) {
    next(error);
  }
});

module.exports = router;