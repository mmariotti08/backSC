const carRoutes = require('express').Router();
const {createCardControllers}=require('../controllers/carControllers/createCardControllers');
const {deleteOneControllers}=require('../controllers/carControllers/deleteOneControllers');
const {getCardControllers}=require('../controllers/carControllers/getCardControllers')

carRoutes.post('/', createCardControllers)

carRoutes.delete('/:id', deleteOneControllers)

carRoutes.get('/', getCardControllers)

module.exports=carRoutes;