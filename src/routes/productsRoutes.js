const productsRoutes = require('express').Router();
<<<<<<< Updated upstream
const { getproducts } = require('../controllers/getproducts');

productsRoutes.get('/', getproducts);
=======
const { getProducts } = require('../controllers/getProducts');
const { getProductsID } =require('../controllers/getProductsID');
const { createProduct }= require('../controllers/createProduct');

productsRoutes.get('/', getProducts);
productsRoutes.get('/:id', getProductsID);
productsRoutes.post('/', createProduct);
>>>>>>> Stashed changes

module.exports = productsRoutes;