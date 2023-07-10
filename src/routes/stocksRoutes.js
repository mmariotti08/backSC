const { getStocksControllers } = require('../controllers/stocksControllers/getStocksControllers');
const stocksRoutes = require('express').Router();

stocksRoutes.get('/', getStocksControllers);

module.exports = stocksRoutes;