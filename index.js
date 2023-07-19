const server = require("./src/server");
const axios = require("axios");
const { conn } = require("./src/db.js");
const Stripe = require("stripe");



const PORT = 3001;

conn.sync({ force: true })
    .then(async () => {
        const response = await axios.get('http://localhost:5000/sneakers');

		const productData = response.data.map(product => {
			return {
                name: product.name,
                brand_name: product.brand_name,
                category: product.category,
                color: product.details,
                gender: product.gender,
                main_picture_url: product.main_picture_url,
                retail_price_cents: product.retail_price_cents,
                slug: product.slug,
                status: product.status,
                idPrice: product.idPrice,
			};
		});

		const createdProducts = await conn.models.Product.bulkCreate(productData);

        for (let i = 0; i < createdProducts.length; i++) {
            const product = createdProducts[i];
            const sizes = ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "13", "14", "15"];
            const stockData = sizes.map(size => {
                return {
                    productId: product.id,
                    size: size,
                    quantity: product.id === 2 ? 0 : Math.floor(Math.random() * 3),
                };
            });
            await conn.models.Stock.bulkCreate(stockData);
        };
    })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch(error => console.error(error));

