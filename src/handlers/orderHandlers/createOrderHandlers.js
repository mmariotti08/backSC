const { Order, User, Product, OrderProduct } = require("../../db");

const createOrderHandlers = async (
  products,
  total_amount,
  description,
  payment_method,
  shipping_address,
  delivery_date,
  userId
) => {
  try {
    // Crear la orden en la base de datos
    const order = await Order.create({
      total_amount,
      description,
      payment_method,
      shipping_address,
      delivery_date,
      userId,
    });

    // Asociar la orden al usuario
    const user = await User.findByPk(userId);
    if (user) {
      await order.setUser(user);
    }

    // Crear las relaciones entre la orden y los productos en la tabla intermedia OrderProduct
    for (const product of products) {
      const { productId, quantity, size } = product;

      // Buscar el producto correspondiente
      const productObj = await Product.findByPk(productId);

      if (productObj) {
        // Crear el OrderProduct con los datos proporcionados
        await OrderProduct.create({
          orderId: order.id,
          productId: productObj.id,
          quantity,
          size,
        });
      }
    }

    return { order };
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { createOrderHandlers };
