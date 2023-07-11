const { Product, Stock} = require('../db')

const updateProductHandlers = async (product, stock, id) => {
    const { name, brand_name, category, color, gender, main_picture_url, retail_price_cents, slug, status } = product;
  
    try {
      const existingProduct = await Product.findByPk(id);
  
      if (existingProduct) {
        const updatedData = {};
  
        // Verificar si cada propiedad existe en el objeto product y actualizarla si es así
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
          const stockData = stock.map((item) => {

            const { size, quantity } = item;
            
            return { productId: id, size, quantity };
          });

          await Stock.bulkCreate(stockData, {
            update: ["size"],
          });
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

// const { Product, Stock} = require('../db')

// const updateProductHandlers = async (product, stock, id) => {
//     const { name, brand_name, category, color, gender, main_picture_url, retail_price_cents, slug, status } = product;
  
//     try {
//       const existingProduct = await Product.findByPk(id);
  
//       if (existingProduct) {
//         const updatedData = {};
  
//         // Verificar si cada propiedad existe en el objeto product y actualizarla si es así
//         if (name) updatedData.name = name;
//         if (brand_name) updatedData.brand_name = brand_name;
//         if (category) updatedData.category = category;
//         if (color) updatedData.color = color;
//         if (gender) updatedData.gender = gender;
//         if (main_picture_url) updatedData.main_picture_url = main_picture_url;
//         if (retail_price_cents) updatedData.retail_price_cents = retail_price_cents;
//         if (slug) updatedData.slug = slug;
//         if (status) updatedData.status = status;
  
//         if (Object.keys(updatedData).length > 0) {
//           await Product.update(updatedData, {
//             where: {
//               id: id,
//             },
//           });
//         }
  
//         if (stock && stock.length > 0) {
//           const stockData = stock.map((item) => {
//             const { size, quantity } = item;

//             return { productId: id, size, quantity };
//           });
//           console.log(stockData,'+++++++stockdata+++++')
//           if 
//           const x=await Stock.update(stockData,{
//             where:{
//                 productId: id,
//             }})
//           console.log('+++++x',x)

//             //   queryInterface.bulkUpdate('roles', {
//             //     label: 'admin',
//             //   }, {
//             //     userType: 3,
//             //   },
//             //   );
//         }
  
//         const updatedProduct = await Product.findByPk(id, { include: [Stock] });
//         return updatedProduct;
//       } else {
//         throw new Error("Product not found");
//       }
//     } catch (error) {
//       return error.message;
//     }
// };
  
// module.exports = { updateProductHandlers };

// const { Product, Stock} = require('../db')

// const updateProductHandlers = async (product, stock, id) => {
//     const { name, brand_name, category, color, gender, main_picture_url, retail_price_cents, slug, status } = product;
  
//     try {
//       const existingProduct = await Product.findByPk(id);
  
//       if (existingProduct) {
//         const updatedData = {};
  
//         // Verificar si cada propiedad existe en el objeto product y actualizarla si es así
//         if (name) updatedData.name = name;
//         if (brand_name) updatedData.brand_name = brand_name;
//         if (category) updatedData.category = category;
//         if (color) updatedData.color = color;
//         if (gender) updatedData.gender = gender;
//         if (main_picture_url) updatedData.main_picture_url = main_picture_url;
//         if (retail_price_cents) updatedData.retail_price_cents = retail_price_cents;
//         if (slug) updatedData.slug = slug;
//         if (status) updatedData.status = status;
  
//         if (Object.keys(updatedData).length > 0) {
//           await Product.update(updatedData, {
//             where: {
//               id: id,
//             },
//           });
//         }
  
//         if (stock && stock.length > 0) {
//           const stockData = stock.map(async(item) => {
//             const { size, quantity } = item;
//             if(size){
//                 const x=await Stock.update(
//                     { quantity },
//                     {
//                         where:{
//                             productId:id,
//                             size,
//                         }
//                     }
//                 )
//                 return x;
                
//             }else{
//                 const a=await Stock.create(stockData)
//                 return a;
//                 //  {
//                 //     updateOnDuplicate: ["size"],
//                 // });
//             }});

//             //return { productId: id, size, quantity };

//         }

//         const updatedProduct = await Product.findByPk(id, { include: [Stock] });
//         return updatedProduct;
//       } else {
//         throw new Error("Product not found");
//       }
//     } catch (error) {
//       return error.message;
//     }
// };
// module.exports = { updateProductHandlers };


//         if (stock && stock.length > 0) {
//           const updateStock = stock.map(async (item) => {
//             const { size, quantity } = item;
//             await Stock.bulkUpdate(
//               { quantity },
//               {
//                 where: {
//                   productId: id,
//                   size,
//                 },
//               }
//             );
//           });
//           await Promise.all(updateStock);
//         }
  






