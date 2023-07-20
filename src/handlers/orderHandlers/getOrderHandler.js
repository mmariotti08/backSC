const { Order, OrderProduct } = require('../../db');

const getOrdersHandler = async () => {
try {
    const orders = await Order.findAll({
      include: [
        {
          model: OrderProduct
        }
      ]
    });

    if (orders.length>0){
      return orders;
    }else{
      return {error: 'there is no created order'}
    }

} catch (error) {
  return error.message
}
}

module.exports = { getOrdersHandler }