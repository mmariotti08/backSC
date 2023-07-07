const { Product, Stock} = require('../db');

const createProductBdHandlers=async(name, brand_name, category, color, gender, main_picture_url, retail_price_cents, slug, status, size, quantity)=>{
    try{
        const createBd= await Product.create({
            name, brand_name, category, color, gender, main_picture_url, retail_price_cents, slug, status
        });

        const createStock= await Stock.create({
            size, quantity, productId: createBd.id
        })
        //await createStock.setProduct(productId)

        return createBd;

    }catch(error){
        return error.message
    }

}



module.exports={
    createProductBdHandlers

}