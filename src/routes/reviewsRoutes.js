const reviewsRoutes = require('express').Router()
const { postReview } = require('../controllers/reviewsControllers/postReview')

reviewsRoutes.post('/', postReview)

module.exports = reviewsRoutes