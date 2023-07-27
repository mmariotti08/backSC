const { Order, OrderProduct} = require('../../db');

const getOrdersHandler = async (userId) => {
  try {
    if (userId){
      const findOrder= await Order.findOne({
        where: {userId},
        include: OrderProduct
      })
      if(findOrder){
        return findOrder;
      }else{
        return {error: 'Order not found'}
      }

    }else{
      const orders = await Order.findAll({
        include: OrderProduct
      });
      if (orders.length>0){
        return orders;
      }else{
        return {error: 'there is no created order'}
      }

    }

  } catch (error) {
    return error.message
  }
}

module.exports = { getOrdersHandler }