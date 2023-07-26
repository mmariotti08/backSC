const { fillProductsHandler } = require('../../handlers/filtersHandlers/fillProductsHandler')

const fillProducts = async (req, res) => {
  const { brand, category, gender, order, asc_desc } = req.query
  try {
    const productsFilltered = await fillProductsHandler(brand, category, gender, order, asc_desc)

    productsFilltered.error
      ? res.status(400).send(productsFilltered.error)
      : res.json(productsFilltered)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = { fillProducts };