const stocksRoutes = require('express').Router();
const { getStocksControllers } = require('../controllers/stocksControllers/getStocksControllers');
const { getStocksID_Controllers } = require('../controllers/stocksControllers/getStocksID_Controllers');
const { deleteStockController } = require('../controllers/stocksControllers/deleteStockController')

stocksRoutes.get('/', getStocksControllers);

stocksRoutes.get('/:id', getStocksID_Controllers);

stocksRoutes.delete('/:id', deleteStockController);

module.exports = stocksRoutes;