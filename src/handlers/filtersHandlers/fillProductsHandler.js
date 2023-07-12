const { Op } = require('sequelize')
const { Product} = require('../../db');

const fillProductsHandler = async (brand, category, gender) => {
  try {
    const products = await Product.findAll(
      {
        where: { 
          brand_name: brand  ? brand : { [Op.not]: null },
          category: category ? { [Op.contains]: [category] } : { [Op.not]: null },
          gender: gender ? { [Op.contains]: [gender] } : { [Op.not]: null }
        }
      }
    )

    if (products.length > 0) {
      return products
    } else {
      return { error: 'Information not found' }
    }
  } catch (error) {
    return error.message
  }
}

module.exports = { fillProductsHandler }