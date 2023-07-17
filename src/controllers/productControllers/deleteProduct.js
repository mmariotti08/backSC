const { deleteProductHandler } = require('../../handlers/productsHandlres/deleteProductHandler')

const deleteProduct = async (req, res) => {
  const { id } =req.params
try {
  const response = await deleteProductHandler(id);

  response.error ? res.status(400).send(response.error)
  : res.status(200).send(response.message)

} catch (error) {
  return res.status(500).json({error: error.message});
}
}

module.exports = { deleteProduct }