const {Op}= require('sequelize')
const { Product, Stock } = require('../db');



const getProductsHandlers=async(name)=>{
    try{
        if (name){
            const product= await Product.findAll({
                where: {name : {[Op.iLike]: `%${name}%`}},
                include: Stock
            })

            if (product.length>0){
                return product
            }else{
                return {error: `shoes: ${name} not found `}
            }

        }else{
            const products = await Product.findAll({
                include: [
                    {
                        model: Stock,
                        attributes: ['size', 'quantity']
                    }
                ]
            });
            return products
        }

    }catch(error){
        return error.message
    }

}

module.exports={
    getProductsHandlers
}