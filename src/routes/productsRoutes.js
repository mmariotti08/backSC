const productsRoutes = require('express').Router();
const { getProducts } = require('../controllers/getProducts');
const { getProductsID } =require('../controllers/getProductsID')
const {createProduct}= require('../controllers/createProduct')
const {updateProduct}= require('../controllers/updateProduct')

productsRoutes.get('/', getProducts);
productsRoutes.get('/:id', getProductsID);
productsRoutes.post('/', createProduct );
productsRoutes.put('/:id', updateProduct)


module.exports = productsRoutes;