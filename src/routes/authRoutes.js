const authRoutes = require('express').Router();
const { login } = require('../controllers/authControllers/login_Controllers');
const { googleLogin } = require('../controllers/authControllers/googleLogin_Controllers');


authRoutes.post('/login', login);
authRoutes.post('/google-login', googleLogin);

module.exports = authRoutes;