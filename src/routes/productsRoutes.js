const productsRoutes = require('express').Router();
const { getProducts } = require('../controllers/getProducts');
const { getProductsID } =require('../controllers/getProductsID')
const {createProduct}= require('../controllers/createProduct')
const {updateProduct}= require('../controllers/updateProduct')
const {deleteProduct}= require('../controllers/deleteProduct')

productsRoutes.get('/', getProducts);
productsRoutes.get('/:id', getProductsID);
productsRoutes.post('/', createProduct );
productsRoutes.put('/:id', updateProduct);
productsRoutes.delete('/:id', deleteProduct);


module.exports = productsRoutes;