const productsRoutes = require('express').Router();
const { getproducts } = require('../controllers/getproducts');
const {getProductsID} =require('../controllers/getProductsID')

productsRoutes.get('/', getproducts);
productsRoutes.get('/:id', getProductsID);

module.exports = productsRoutes;