const { Product, Stock } = require('../db');

const deleteProductHandler = async (id) => {
  try {
        // Eliminar el stock asociado al producto
        await Stock.destroy({ where: { productId: id } });

        // Eliminar el producto
        const deletedProduct = await Product.destroy({ where: { id: id } });
        if(!deletedProduct) {
          return {error: `the shoes num ${id} not found `}
        } else {
          return deletedProduct
        }
  } catch (error) {
    return error.message
  }
}

module.exports = { deleteProductHandler }