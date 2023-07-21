const {Op}= require('sequelize')
const { Product, Stock } = require('../../db');

const getProductsHandlers=async(name)=>{
    try{
        if (name){
            const product= await Product.findAll({
                where: {
                    name : {[Op.iLike]: `%${name}%`},
                    status: "active"
                },
                include: Stock
            })

            if (product.length > 0){
                return product
            }else{
                return {error: `shoes: ${name} not found `}
            }

        }else{
            const products = await Product.findAll({
                where: { status: "active" },
                include: [
                    {
                        model: Stock,
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