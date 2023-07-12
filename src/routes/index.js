const { Router } = require("express");
const productsRoutes = require('./productsRoutes');
const stocksRoutes = require('./stocksRoutes');
const userRoutes=require('./userRoutes')

const router = Router();

router.use('/products', productsRoutes);

router.use('/stocks', stocksRoutes);

router.use('/user', userRoutes)

module.exports = router;