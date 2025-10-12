const express = require('express');
const Movies = require('../model/Movies');
const router = express.Router();
const Movie = require('../model/Movies')

/* GET movies listing. */
router.get('/', function (req, res, next) {
    Movie.find({}, (err, data) => {
        if (err) throw err
        res.json(data);
    })
});

// POST add movie
router.get('/add', (req, res, next) => {
    res.send('Add movies');
});
router.post('/add', (req, res, next) => {
    const { title, category, country, year, director, imdb, _score } = req.body
    const newMovie = new Movie({ title, category, country, year, director })
    newMovie.save((err, data) => {
        if (err) throw err;
        res.json(newMovie);
        // res.redirect('/movies')
    })
});

// Get special movie
router.get('/:movie_id', (req, res, next) => {
    Movie.findById(req.params.movie_id, (err, movie) => {
        if (err) throw err;
        res.json(movie);
    })
});

// PUT update movie
router.post('/:movie_id', (req, res, next) => {
    const { name, surname } = req.body
    Movie.findByIdAndUpdate(req.params.movie_id,
        { name, surname },
        (err, movie) => {
            if (err) throw err;
            res.json(movie);
            // res.redirect(`/${req.params.movie_id}`)
        })
})

// Delete movie
router.get('/delete/:movie_id', (req, res, next) => {
    Movie.findByIdAndDelete(req.params.movie_id, (err, movie) => {
        if (err) throw err;
        res.json(movie);
    })
});





module.exports = router;