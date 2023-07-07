const productsRoutes = require('express').Router();
const { getProducts } = require('../controllers/getProducts');
const { getProductsID } =require('../controllers/getProductsID')

productsRoutes.get('/', getProducts);
productsRoutes.get('/:id', getProductsID);

module.exports = productsRoutes;