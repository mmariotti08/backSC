const productsRoutes = require('express').Router();

const { getProducts } = require('../controllers/getproducts');
const { getProductsID } =require('../controllers/getProductsID');
const { createProduct }= require('../controllers/createProduct');
const { updateProduct } = require('../controllers/updateProduct');
const { deleteProduct } = require('../controllers/deleteProduct');
const { getProductDraft_Controllers } = require('../controllers/getProductDraft_Controllers');
const { checkAuth } = require('../middleware/auth');
const { checkAdmAuth }=require('../middleware/adminAuth');

//Para que funcionen los middleware descomentar checkAuth y checkAdmAuth de las rutas
productsRoutes.get('/draft', getProductDraft_Controllers);
productsRoutes.get('/', getProducts);
productsRoutes.get('/:id', getProductsID);
productsRoutes.post('/', /* checkAuth, checkAdmAuth, */ createProduct); //middleware admin
productsRoutes.put('/:id', /* checkAuth, checkAdmAuth, */ updateProduct); //middleware admin
productsRoutes.delete('/:id', /* checkAuth, checkAdmAuth, */ deleteProduct); //middleware admin

module.exports = productsRoutes;