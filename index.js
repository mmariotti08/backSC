const server = require("./src/server");
const axios = require("axios");
const { conn } = require("./src/db.js");

const PORT = 3001;

conn.sync({ force: false  })
    // .then(async () => {
    //     const response = await axios.get('http://localhost:5000/sneakers');

	// 	const productData = response.data.map(product => {
	// 		return {
	// 			name: product.name,
    //             brand_name: product.brand_name,
    //             category: product.category,
    //             color: product.details,
    //             gender: product.gender,
    //             main_picture_url: Array.isArray(product.main_picture_url) ? product.main_picture_url : [product.main_picture_url],
    //             retail_price_cents: product.retail_price_cents,
    //             slug: product.slug,
    //             status: product.status,
	// 		};
	// 	});

	// 	const createdProducts = await conn.models.Product.bulkCreate(productData);

    //     for (let i = 0; i < createdProducts.length; i++) {
    //         const product = createdProducts[i];
    //         const sizes = ["7", "7.5", "8", "8.5", "9", "9.5", "10", "10.5", "11", "11.5", "12", "12.5", "13", "14", "15"];
    //         const stockData = sizes.map(size => {
    //             return {
    //                 productId: product.id,
    //                 size: size,
    //                 quantity: product.id === 2 ? 0 : Math.floor(Math.random() * 3),
    //             };
    //         });
    //         await conn.models.Stock.bulkCreate(stockData);
    //     };
    // })
    // .then(async () => {
    //     const response = await axios.get('http://localhost:5000/users');

    //     const usersData = response.data.map(user => {
	// 		return {
	// 			name: user.name,
	// 			last_name: user.last_name,
	// 			phone: user.phone,
	// 			mail: user.mail,
	// 			password: user.password,
	// 			administrator: user.administratos,
	// 			active: user.active
	// 		};
	// 	});

    //     await Promise.all(usersData.map(userData => conn.models.User.create(userData)));
    // })
    // .then(async () => {
    //     const response = await axios.get('http://localhost:5000/order');
    //     const orders = response.data;
        
    //     for (let order of orders) {
    //         const user = await conn.models.User.findOne({
    //             attributes: ['id'],
    //             order: conn.literal('RANDOM()'),
    //         });

    //         const createdOrder = await conn.models.Order.create({
    //             userId: user.dataValues.id,
    //             total_amount: order.total_amount,
    //             description: order.description,
    //             payment_method: order.payment_method,
    //             shipping_address: order.shipping_address,
    //             delivery_date: order.delivery_date
    //         });
            
    //         const c = order.products ? order.products.map(product => {
    //             return {
    //                 orderId: createdOrder.id,
    //                 productId: product.productID,
    //                 quantity: product.quantity,
    //                 size: product.size
    //             };
    //         }) : [];

    //         await conn.models.OrderProduct.bulkCreate(c);
    //     };
    // })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch(error => console.error(error));