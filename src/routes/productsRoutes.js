const productsRoutes = require('express').Router();

const { getProducts } = require('../controllers/getproducts');
const { getProductsID } =require('../controllers/getProductsID');
const { createProduct }= require('../controllers/createProduct');
const { updateProduct } = require('../controllers/updateProduct');
const { deleteProduct } = require('../controllers/deleteProduct');
const { getProductDraft_Controllers } = require('../controllers/getProductDraft_Controllers');

productsRoutes.get('/draft', getProductDraft_Controllers);
productsRoutes.get('/', getProducts);
productsRoutes.get('/:id', getProductsID);
productsRoutes.post('/', createProduct);
productsRoutes.put('/:id', updateProduct);
productsRoutes.delete('/:id', deleteProduct);

module.exports = productsRoutes;