const { Router } = require("express");
const productsRoutes = require('./productsRoutes');
const stocksRoutes = require('./stocksRoutes');

const router = Router();

router.use('/products', productsRoutes);

router.use('/stocks', stocksRoutes);

module.exports = router;