const userRoutes = require('express').Router();
const {createUserControllers}=require('../controllers/userControllers/createUserControllers');
const {updateUserControllers}=require('../controllers/userControllers/updateUserControllers')

userRoutes.post('/',createUserControllers)

userRoutes.put('/:id', updateUserControllers)


module.exports=userRoutes;

