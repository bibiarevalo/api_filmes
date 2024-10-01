const express = require('express')
const router = express.Router();
const controller = require('../controllers/controller');


router.get('/list_movies', controller.listMovies)
//router.get('/:category', controller.listMoviesCategory)
router.post('/create', controller.accessMovie)
router.put('/:id', controller.updateMovie)
// router.delete('/:id', controller.deleteMovie)


module.exports = router