const orderRoutes = require('express').Router();
const {createOrder}=require('../controllers/orderControllers/createOrder')

orderRoutes.post('/', createOrder )

module.exports=orderRoutes;