const express = require("express");
const router = express.Router();
const Movie = require("../model/Movie");

/* GET /api/movie/ page. */
router.get("/", function (req, res, next) {
  Movie.find({}, "title _id", (err, data) => {
    if (err) throw err;
    res.json(data)
  });
});

router.post("/", function (req, res, next) {
  const { title, category, country, year, director, imdb_score } = req.body;
  new Movie({ title, category, country, year, director, imdb_score }).save(
    (err) => {
      if (err) throw err;
      res.send("Movie created");
    }
  );
});

router.get("/top10", function (req, res, next) {
  Movie.find({})
    .sort({ imdb_score: -1 })
    .limit(10)
    .then((data) => res.json(data));
});

router.get("/between/:start_year/:end_year", function (req, res, next) {
  const { start_year, end_year } = req.params;
  Movie.find({
    year: {
      $gte: start_year,
      $lte: end_year,
    },
  }).then((data) => res.json(data));
});

router.get("/:movie_id", function (req, res, next) {
  const { movie_id } = req.params;
  Movie.findById(movie_id, (err, movie) => {
    if (err) throw err;
    res.json(movie);
  });
});

router.put("/:movie_id", function (req, res, next) {
  const { movie_id } = req.params;
  const { name, surname } = req.body;

  Movie.findByIdAndUpdate(movie_id, { name, surname }, (err, data) => {
    if (err) throw err;
    res.send("Movie updated");
  });
});

router.delete("/:movie_id", function (req, res, next) {
  const { movie_id } = req.params;
  Movie.findByIdAndDelete(movie_id, (err, movie) => {
    if (err) throw err;
    res.send("Movie deleted");
  });
});

module.exports = router;
