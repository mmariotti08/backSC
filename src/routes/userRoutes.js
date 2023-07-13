const userRoutes = require('express').Router();
const {createUserControllers}=require('../controllers/userControllers/createUserControllers');
const {updateUserControllers}=require('../controllers/userControllers/updateUserControllers');
const {deleteUserControllers}=require('../controllers/userControllers/deleteUserControllers');
const {getUsersControllers}=require('../controllers/userControllers/getUserControllers');
const {getUserControllersID}=require('../controllers/userControllers/getUserControllersID');


userRoutes.post('/',createUserControllers)

userRoutes.put('/:id', updateUserControllers)

userRoutes.delete('/:id', deleteUserControllers)

userRoutes.get('/', getUsersControllers)

userRoutes.get('/:id', getUserControllersID)


module.exports=userRoutes;

