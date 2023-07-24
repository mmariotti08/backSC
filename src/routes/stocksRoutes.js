const stocksRoutes = require('express').Router();
const { getStocksControllers } = require('../controllers/stocksControllers/getStocksControllers');
const { getStocksID_Controllers } = require('../controllers/stocksControllers/getStocksID_Controllers');
const { deleteStockController } = require('../controllers/stocksControllers/deleteStockController')
const {updateStockControllers}=require('../controllers/stocksControllers/updateStockControllers')

stocksRoutes.get('/', getStocksControllers);

stocksRoutes.get('/:id', getStocksID_Controllers);

stocksRoutes.delete('/:id', deleteStockController);

stocksRoutes.put('/', updateStockControllers)

module.exports = stocksRoutes;