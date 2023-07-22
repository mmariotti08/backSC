const { Stock } = require('../../db');

const updateStockHandlers = async (status, products) => {
  try {
    console.log('handler+++', status, products)
    if (status === 'accredited') {
      const response = await Promise.all(products.map(async (product) => {

        const { productId, size, quantity } = product;

        const existingProduct = await Stock.findOne({
          where: { productId, size },
        });

        if (existingProduct) {
          const updatedQuantity = existingProduct.quantity - quantity;
          await existingProduct.update({ quantity: updatedQuantity });
        } else {
          throw new Error('Product not found');
        }
      }));
      return response;
    } else {
      return { error: 'The payment was not made correctly' };
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = { updateStockHandlers };

// products=[{productId:1 , size: '7,5', quantity:2},{productId:2 , size: '8', quantity:1} ]