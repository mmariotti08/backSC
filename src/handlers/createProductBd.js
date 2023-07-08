const { Product, Stock } = require("../db");

const createProductBdHandlers = async (name, brand_name, category, color, gender, main_picture_url, retail_price_cents, slug, status, stocks) => {
	try {
		const createProduct = await Product.create({
			name,
			brand_name,
			category,
			color,
			// gender,
			main_picture_url,
			retail_price_cents,
			slug,
			status
		});

		const createStocks = stocks.map(stock => {
			console.log(stock);
			return {
				productId: createProduct.id,
				size: stock.size,
				quantity: stock.quantity
			};
		});

		await Stock.bulkCreate(createStocks);

		return createProduct;
	} catch (error) {
		return error.message;
	};
};

module.exports = { createProductBdHandlers };