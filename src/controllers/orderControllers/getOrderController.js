const { getOrdersHandler } = require('../../handlers/orderHandlers/getOrderHandler')

const getOrderController = async (req, res) => {
  const {userId}=req.query
try {
  const order = await getOrdersHandler(userId)

  order.error ? res.status(400).send(order.error) : res.json(order);
} catch (error) {
  
  return res.status(500).send(error.message);
}
}

module.exports = { getOrderController };