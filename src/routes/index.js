const { Router } = require("express");
const productsRoutes = require('./productsRoutes');
const stocksRoutes = require('./stocksRoutes');
const fillRoutes = require('./fillRoutes')
const userRoutes = require('./userRoutes')
const orderRoutes = require('./orderRoutes')
const authRoutes = require('./authRoutes');
const paymentRoutes = require('./paymentRoutes')
const reviewsRoutes = require('./reviewsRoutes')

const router = Router();

router.use('/fill', fillRoutes);

router.use('/products', productsRoutes);

router.use('/stocks', stocksRoutes);

router.use('/user', userRoutes);

router.use('/order', orderRoutes);

router.use('/auth', authRoutes);

router.use('/payment', paymentRoutes);

router.use('/review', reviewsRoutes)

module.exports = router;