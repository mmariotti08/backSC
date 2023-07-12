const productsRoutes = require('express').Router();
const { getProducts } = require('../controllers/getproducts');
const { getProductsID } =require('../controllers/getProductsID')
const {createProduct}= require('../controllers/createProduct')

productsRoutes.get('/', getProducts);
productsRoutes.get('/:id', getProductsID);
productsRoutes.post('/', createProduct );


module.exports = productsRoutes;