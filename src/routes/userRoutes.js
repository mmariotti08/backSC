const userRoutes = require('express').Router();
const {createUserControllers}=require('../controllers/userControllers/createUserControllers');
const {updateUserControllers}=require('../controllers/userControllers/updateUserControllers');
const {deleteUserControllers}=require('../controllers/userControllers/deleteUserControllers')


userRoutes.post('/',createUserControllers)

userRoutes.put('/:id', updateUserControllers)

userRoutes.delete('/:id', deleteUserControllers)


module.exports=userRoutes;

