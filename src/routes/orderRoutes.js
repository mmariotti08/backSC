const orderRoutes = require('express').Router();
const {createOrder}=require('../controllers/orderControllers/createOrder')
const { getOrderController }=require('../controllers/orderControllers/getOrderController')
const { getOrderId }=require('../controllers/orderControllers/getOrderId')

orderRoutes.post('/', createOrder )
orderRoutes.get('/', getOrderController)
orderRoutes.get('/:id', getOrderId)

module.exports=orderRoutes;