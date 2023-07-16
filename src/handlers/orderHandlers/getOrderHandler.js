const { Order, Product, OrderProduct } = require('../../db');

const getOrdersHandler = async () => {
try {
    // Obtener todas las órdenes y sus productos asociados
    const orders = await Order.findAll({
      include: OrderProduct
    });

    return orders;
} catch (error) {
  return error.message
}
}

module.exports = { getOrdersHandler }