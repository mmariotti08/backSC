const paymentsRoutes = require('express').Router();

const { createPayments } =  require ('../handlers/PaymentsHandler/PaymentsHandler') 


paymentsRoutes.post('/', createPayments);

module.exports = paymentsRoutes;

