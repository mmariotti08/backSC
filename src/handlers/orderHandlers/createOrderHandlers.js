const { Order, User, Product } = require("../../db");

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
    });

    // Asociar la orden al usuario
    const user = await User.findByPk(userId);
    if (user) {
      await order.setUser(user);
    }

    // Crear las relaciones entre la orden y los productos en la tabla intermedia orderProduct
    for (const product of products) {
      const { productId, quantity } = product;

      // Buscar el producto correspondiente
      const productObj = await Product.findByPk(productId);

      if (productObj) {
        // Agregar la cantidad a la relación utilizando la función `addProduct` generada automáticamente por Sequelize
        await order.addProduct(productObj, { through: { quantity } });
      }
    }

    return { order };
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { createOrderHandlers };
