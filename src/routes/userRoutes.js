const userRoutes = require('express').Router();
const {createUserControllers}=require('../controllers/userControllers/createUserControllers');
const {updateUserControllers}=require('../controllers/userControllers/updateUserControllers');
const {deleteUserControllers}=require('../controllers/userControllers/deleteUserControllers');
const {getUsersControllers}=require('../controllers/userControllers/getUserControllers');
const {getUserControllersID}=require('../controllers/userControllers/getUserControllersID');
const {updateAdmControllers}=require('../controllers/userControllers/updateAdmControllers');
const {updAdministratorController}=require('../controllers/userControllers/updAdministratorController');
const {loginUserCompare}=require('../controllers/userControllers/loginUserCompare')
//Middlewares para verificacion de permisos
const { checkAuth } = require('../middleware/auth'); //Verifica que el usuario tenga sesion activa. Dura 1 hora.
const {checkAdmAuth}=require('../middleware/adminAuth'); //Verifica que el usuario tenga propiedad Administrator en true.
const { checkActiveUserAuth } = require('../middleware/activeUserAuth'); //Verifica que el usuario tenga propiedad active en true. En false lo banea.


//todas las rutas son /user
userRoutes.post('/', createUserControllers)//Para crear un usuario (Para registrarse, propiedades mail y password son obligatorias)

userRoutes.post('/login',checkActiveUserAuth, loginUserCompare) //Para loguearse

userRoutes.put('/:id',checkActiveUserAuth, checkAuth, updateUserControllers) //El user pueda modificar sus datos.

userRoutes.put('/act/:id', updateAdmControllers) //Para cambiar e estatus al usuario para banearlo.

userRoutes.put('/adm/:id', updAdministratorController) //Cambiar estatus de admin a true

userRoutes.delete('/:id', deleteUserControllers) //Borrar un usuario

userRoutes.get('/', checkAuth, getUsersControllers) //Trae todos los usuarios

userRoutes.get('/:id', getUserControllersID) //Para traer un usuario especifico por Id


module.exports=userRoutes;

