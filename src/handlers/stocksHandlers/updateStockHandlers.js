const { Stock } = require('../../db');

const updateStockHandlers = async (products) => {
  try {
    console.log('handlerrecibe+++', products);

    const updatedProducts = await Promise.all(products.map(async (product) => {
      const { productId, size, quantity } = product;

      const existingProduct = await Stock.findOne({
        where: { productId, size },
      });

      if (existingProduct) {
        const updatedQuantity = existingProduct.quantity - quantity;
        await existingProduct.update({ quantity: updatedQuantity });

        // Refrescar los datos después de la actualización
        const refreshedProduct = await Stock.findOne({
          where: { productId, size },
        });
        return refreshedProduct;
        
      } else {
        throw new Error('Product not found');
      }
    }));
    return updatedProducts;

  } catch (error) {
    return { error: 'The payment was not made correctly' };
  }
};

module.exports = { updateStockHandlers };
//products=[{productId:1 , size: '7,5', quantity:2},{productId:2 , size: '8', quantity:1} ]