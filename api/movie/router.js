const express = require('express')
const Movies = require('./model')
const router = express.Router();


router.get('/', async (req, res, next) => {
    try {
        const movies = await Movies.getAll()
        res.json(movies)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const movie = await Movies.getById(req.params.id)
        if (movie) {
            res.json(movie)
        } else {
            res.status(404).json({ message: "Movie not found" })
        }
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const newMovie = await Movies.add(req.body)
        res.status(201).json(newMovie)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const delMovie = await Movies.remove(req.params.id)
        if (delMovie) {
            res.status(200).json({ message: `Movie ID: ${req.params.id} deleted` })
        } else {
            res.status(404).json({ message: "Movie not found" })
        }
    } catch (err) {
        next(err)
    }
})

module.exports = router 