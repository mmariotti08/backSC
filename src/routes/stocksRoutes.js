const stocksRoutes = require('express').Router();
const { getStocksControllers } = require('../controllers/stocksControllers/getStocksControllers');
const { deleteStockController } = require('../controllers/stocksControllers/deleteStockController')


stocksRoutes.get('/', getStocksControllers);
stocksRoutes.delete('/:id', deleteStockController);

module.exports = stocksRoutes;