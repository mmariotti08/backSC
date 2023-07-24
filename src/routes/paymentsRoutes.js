const paymentsRoutes = require('express').Router();

const { createPayments } =  require ('../handlers/paymentshandler/paymentsHandler.js') 


paymentsRoutes.post('/', createPayments);

module.exports = paymentsRoutes;