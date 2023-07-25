const paymentRoutes = require('express').Router();

const {createOrder}=require('../controllers/paymentControllers/createOrder')
const {receiveWebHookControllers}=require('../controllers/paymentControllers/receiveWebhookControllers')
const {successControllers}=require('../controllers/paymentControllers/successControllers')
const {failureControllers}=require('../controllers/paymentControllers/failureControllers')
const {pendingControllers}=require('../controllers/paymentControllers/pendingControllers')

paymentRoutes.post('/', createOrder)

paymentRoutes.get('/success', successControllers)

paymentRoutes.get('/failure', failureControllers)

paymentRoutes.get('/pending', pendingControllers)

paymentRoutes.post('/webhook', receiveWebHookControllers)




module.exports=paymentRoutes;