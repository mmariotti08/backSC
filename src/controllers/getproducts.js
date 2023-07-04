const { Product } = require('../db');

const getproducts = async (req, res) => {
    try {
        const products = await Product.findAll();

        return products.length > 0
            ? res.status(200).json(products)
            : res.status(404).send("Products not found");
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { getproducts };