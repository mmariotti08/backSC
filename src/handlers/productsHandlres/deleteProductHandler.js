const { Product, Stock } = require('../../db');

const deleteProductHandler = async (id) => {
  try {
        await Stock.destroy({ where: { productId: id } });

        
        const deletedProduct = await Product.destroy({ where: { id: id } });

        if(!deletedProduct) {
          return {error: `the shoes num ${id} not found `}
        } else {
          return  {message: `Product successfully deleted`}
        }
  } catch (error) {
    
    return error.message
  }
}

module.exports = { deleteProductHandler }