const carRoutes = require('express').Router();
const {createCardControllers}=require('../controllers/carControllers/createCardControllers');
const {deleteOneControllers}=require('../controllers/carControllers/deleteOneControllers');
const {deleteAllControllers}=require('../controllers/carControllers/deleteAllControllers')
const {getCardControllers}=require('../controllers/carControllers/getCardControllers')

carRoutes.post('/', createCardControllers)

carRoutes.delete('/:id', deleteOneControllers)

carRoutes.delete('/all', deleteAllControllers)

carRoutes.get('/', getCardControllers)

module.exports=carRoutes;