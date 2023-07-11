const { Product, Stock } = require('../db');

const updateProductHandlers = async (product, stock, id) => {
  const { name, brand_name, category, color, gender, main_picture_url, retail_price_cents, slug, status } = product;

  try {
    const existingProduct = await Product.findByPk(id);

    if (existingProduct) {
      const updatedData = {};

      if (name) updatedData.name = name;
      if (brand_name) updatedData.brand_name = brand_name;
      if (category) updatedData.category = category;
      if (color) updatedData.color = color;
      if (gender) updatedData.gender = gender;
      if (main_picture_url) updatedData.main_picture_url = main_picture_url;
      if (retail_price_cents) updatedData.retail_price_cents = retail_price_cents;
      if (slug) updatedData.slug = slug;
      if (status) updatedData.status = status;

      if (Object.keys(updatedData).length > 0) {
        await Product.update(updatedData, {
          where: {
            id: id,
          },
        });
      }

      if (stock && stock.length > 0) {
        const existingSizes = await Stock.findAll({
          where: {
            productId: id,
            size: stock.map(item => item.size),
          },
        });

        const existingSizesMap = existingSizes.reduce((map, item) => {
          map[item.size] = item;
          return map;
        }, {});

        const stockData = stock.map((item) => {
          const { size, quantity } = item;

          if (existingSizesMap[size]) {
            // Si la "size" ya existe en la base de datos, actualiza la "quantity"
            existingSizesMap[size].quantity = quantity;
            return existingSizesMap[size].save();
          } else {
            // Si la "size" no existe, crea un nuevo registro
            return Stock.create({ productId: id, size, quantity });
          }
        });

        await Promise.all(stockData);
      }

      const updatedProduct = await Product.findByPk(id, { include: [Stock] });
      return updatedProduct;
    } else {
      throw new Error("Product not found");
    }
  } catch (error) {
    return error.message;
  }
};

module.exports = { updateProductHandlers };




