const express = require("express");
const router = express.Router();
const Movie = require("../model/Movie");

const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now() + file.originalname}`);
  },
});
const upload = multer({ storage });

/* GET home page. */
router.get("/", function (req, res, next) {
  Movie.find({}, (err, data) => {
    if (err) return err;
    res.render("index", { title: "Express", data });
  });
});

router.post(
  "/",
  upload.fields([
    { name: "poster" },
    { name: "movie" },
    { name: "trailers", maxCount: 10 },
  ]),
  function (req, res, next) {
    const { title, year } = req.body;
    console.log(req.files);
    const poster = req.files.poster[0].filename;
    const movie = req.files.movie[0].filename;
    let trailersName = [];
    req.files.trailers.forEach((trailer) =>
      trailersName.push(trailer.filename)
    );

    new Movie({
      title,
      year,
      poster,
      movie,
      trailers: trailersName,
    }).save((err) => {
      if (err) return err;
      res.redirect("/");
    });
  }
);

router.get("/movie/:id", function (req, res, next) {
  const { id } = req.params;
  Movie.findById(id, (err, data) => {
    if (err) return err;
    res.render("info", { data });
  });
});

module.exports = router;
