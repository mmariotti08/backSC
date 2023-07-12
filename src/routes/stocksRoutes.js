const stocksRoutes = require('express').Router();
const { getStocksControllers } = require('../controllers/stocksControllers/getStocksControllers');
const { getStocksID_Controllers } = require('../controllers/stocksControllers/getStocksID_Controllers');

stocksRoutes.get('/', getStocksControllers);
stocksRoutes.get('/:id', getStocksID_Controllers);

module.exports = stocksRoutes;