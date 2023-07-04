const productsRoutes = require('express').Router();
const { getproducts } = require('../controllers/getproducts');

productsRoutes.get('/', getproducts);

module.exports = productsRoutes;