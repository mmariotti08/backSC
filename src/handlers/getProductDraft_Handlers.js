const { Product } = require('../db');

const getProductsDraft_Handlers = async () => {
    try {
        const product = await Product.findAll({
            where: { status: "draft" }
        });

        return product.length
            ? product
            : { error: "There are no products in draft." };
    } catch (error) {
        return error.message;
    };
};

module.exports = { getProductsDraft_Handlers };