const userRoutes = require('express').Router();
const {createUserControllers}=require('../controllers/userControllers/createUserControllers');

userRoutes.post('/',createUserControllers)


module.exports=userRoutes;

