const { Router } = require("express");
const productsRoutes = require('./productsRoutes');
const stocksRoutes = require('./stocksRoutes');
const fillRoutes = require('./fillRoutes')

const router = Router();

router.use('/fill', fillRoutes);

router.use('/products', productsRoutes);

router.use('/stocks', stocksRoutes);

module.exports = router;