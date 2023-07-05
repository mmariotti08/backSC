const { Product, Stock } = require('../db');

const getproducts = async (req, res) => {
    try {
        const products = await Product.findAll({
            include: [
                {
                    model: Stock,
                    attributes: ['size', 'quantity']
                }
            ]
        });

        return products.length > 0
            ? res.status(200).json(products)
            : res.status(404).send("Products not found");
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { getproducts };