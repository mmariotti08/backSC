const { Order, OrderProduct, Product } = require('../../db');

const getOrderIdHandler = async (id) => {
    try {
        const response = await Order.findByPk(id, {
            include: {
                model: OrderProduct,
                include: Product
            }
        });

        return !response
            ? { error: `The order ${id} not found` }
            : response;
    } catch (error) {
        return error.message;
    };
};

module.exports = { getOrderIdHandler };