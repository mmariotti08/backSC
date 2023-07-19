const orderRoutes = require('express').Router();
const {createOrder}=require('../controllers/orderControllers/createOrder')
const { getOrderController }=require('../controllers/orderControllers/getOrderController')

orderRoutes.post('/', createOrder )

orderRoutes.get('/', getOrderController)

module.exports=orderRoutes;