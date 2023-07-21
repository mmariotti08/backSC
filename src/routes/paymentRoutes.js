const paymentRoutes = require('express').Router();

const {createOrder}=require('../controllers/paymentControllers/createOrder')
const {receiveWebHookControllers}=require('../controllers/paymentControllers/receiveWebhookControllers')

paymentRoutes.post('/', createOrder)

paymentRoutes.get('/success', (req, res)=>res.send('success'))

paymentRoutes.get('/failure', (req, res)=>res.send('failure'))

paymentRoutes.get('/pending', (req, res)=>res.send('pending'))

paymentRoutes.post('/webhook', receiveWebHookControllers)




module.exports=paymentRoutes;