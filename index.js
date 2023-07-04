
const server = require("./src/server");
const axios = require("axios");
const { conn } = require("./src/db.js")

const PORT = 3001;

conn.sync({ force: true })
    .then(async () => {
        const response = await axios.get('http://localhost:5000/sneakers');

		const productData = response.data.map(product => {
			return {
				id: product.id,
				name: product.name,
                brand_name: product.brand_name,
                category: product.category,
                color: product.color,
                details: product.details,
                gender: product.gender,
                grid_picture_url: product.grid_picture_url,
                has_stock: product.has_stock,
                main_picture_url: product.main_picture_url,
                original_picture_url: product.original_picture_url,
                retail_price_cents: product.retail_price_cents,
                shoe_condition: product.shoe_condition,
                silhouette: product.silhouette,
                size_range: product.size_range,
                sku: product.sku,
                slug: product.slug,
                status: product.status,
                // story_html: product.story_html
			};
		});
		await conn.models.Product.bulkCreate(productData);
    })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch(error => console.error(error));

