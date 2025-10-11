const express = require("express");
const router = express.Router();
const Director = require("../model/Directors");
const Movie = require("../model/Movie");


/* GET home page. */
router.get("/", function (req, res, next) {
    Director.find({}, "name _id", (err, data) => {
        if (err) throw err;
        res.json(data)
    });
});

router.post("/", function (req, res, next) {
    const { name, surname, bio } = req.body;
    new Director({ name, surname, bio }).save(
        (err) => {
            if (err) throw err;
            res.send("Director created");
        }
    );
});

router.get("/:director_id", function (req, res, next) {
    const { director_id } = req.params;
    Director.findById(director_id, (err, director) => {
        if (err) throw err;
        res.json(director);
    });
});


router.get("/:director_id/best10movie", function (req, res, next) {
    const { director_id } = req.params;

    Movie.find({ director: director_id })
        .sort({ imdb_score: -1 })
        .limit(10).then(data => res.json(data));
});


router.put("/:director_id", function (req, res, next) {
    const { director_id } = req.params;
    const { name, surname } = req.body;

    Director.findByIdAndUpdate(director_id, { name, surname }, (err, data) => {
        if (err) throw err;
        res.send("Director updated");
    });
});

router.delete("/:director_id", function (req, res, next) {
    const { director_id } = req.params;
    Director.findByIdAndDelete(director_id, (err, director) => {
        if (err) throw err;
        res.send("Director deleted");
    });
});


module.exports = router;