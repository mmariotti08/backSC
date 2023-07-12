const fillRoutes = require('express').Router();
const { fillProducts } = require('../controllers/filtersControllers/fillProducts')


fillRoutes.get('/', fillProducts)


module.exports = fillRoutes;