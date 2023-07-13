const { Product } = require('../db');

const getProductsDraft_Handlers = async () => {
    try {
        const product = await Product.findAll({
            where: { status: "draft" }
        });

        return product;
    } catch (error) {
        return error.message;
    };
};

module.exports = { getProductsDraft_Handlers };