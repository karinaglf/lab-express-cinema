const express = require('express');
const router = express.Router();
const Movie   = require('../models/Movie.model');


/* GET movies list */

router.get('/movies', (req, res) => {
    Movie
    .find()
    .then(moviesList => res.render('movies/movies-list', {moviesList}))
    .catch(err => console.log('Error while displaying all movies: ', err))
})


router.get('/movies/:movieId', (req, res) => {
    const movieId = req.params.movieId
    
    Movie
    .findById(movieId)
    .then(foundedMovie => res.render('movies/movies-detail', {foundedMovie}))
    .catch(err => console.log('Error while displaying one Movie: ', err))

})


module.exports = router;
