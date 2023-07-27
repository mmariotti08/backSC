
const { Product, Stock, User } = require('../../db');

const getIdHandler = async (id) => {
  try {
    const responseDb = await Product.findByPk(id, {
      include: [
        {
          model: Stock,
          attributes: ['size', 'quantity']
        },
        {
          model: User,
          attributes: ['name']
        }
      ]
    });

    if (!responseDb) {
      return { error: `the shoes num ${id} not found` }
    } else {
      return responseDb
    }

  } catch (error) {

    return error.message
  }

}

module.exports = {
  getIdHandler
}