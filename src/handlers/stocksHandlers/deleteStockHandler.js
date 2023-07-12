const { Product, Stock } = require('../../db');

const deleteStockHandler = async (id) => {
try {
  // Eliminar el elemento del stock
  const deleteStockElement = await Stock.destroy({where: {id}})

  if(!deleteStockElement) {
    return {error: `Cant found element num ${id}`}
  } else {
    return {message: `Stock element deleted successfully`};
  }
} catch (error) {
  return error.message
}
}

module.exports = { deleteStockHandler }