const userRoutes = require('express').Router();
const {createUserControllers}=require('../controllers/userControllers/createUserControllers');
const {updateUserControllers}=require('../controllers/userControllers/updateUserControllers');
const {deleteUserControllers}=require('../controllers/userControllers/deleteUserControllers');
const {getUsersControllers}=require('../controllers/userControllers/getUserControllers');
const {getUserControllersID}=require('../controllers/userControllers/getUserControllersID');
const {updateAdmControllers}=require('../controllers/userControllers/updateAdmControllers');
const {updAdministratorController}=require('../controllers/userControllers/updAdministratorController');
const {loginUserCompare}=require('../controllers/userControllers/loginUserCompare')
const { checkAuth } = require('../middleware/auth');


userRoutes.post('/',createUserControllers)

userRoutes.post('/login',loginUserCompare)

userRoutes.put('/:id', checkAuth, updateUserControllers)

userRoutes.put('/act/:id', updateAdmControllers)

userRoutes.put('/adm/:id', updAdministratorController)

userRoutes.delete('/:id', deleteUserControllers)

userRoutes.get('/', getUsersControllers)

userRoutes.get('/:id', getUserControllersID)


module.exports=userRoutes;

