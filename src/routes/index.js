const { Router } = require("express");
const productsRoutes = require('./productsRoutes');
const stocksRoutes = require('./stocksRoutes');
const fillRoutes = require('./fillRoutes')
const userRoutes=require('./userRoutes')
const orderRoutes=require('./orderRoutes')


const router = Router();

router.use('/fill', fillRoutes);

router.use('/products', productsRoutes);

router.use('/stocks', stocksRoutes);

router.use('/user', userRoutes)

router.use('/order', orderRoutes)

module.exports = router;