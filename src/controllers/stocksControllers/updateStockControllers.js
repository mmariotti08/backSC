const {updateStockHandlers}=require('../../handlers/stocksHandlers/updateStockHandlers')

const updateStockControllers=async(req,res)=>{
    try{
        const {products}=req.body
        
        if (products.length===0) throw Error ('No shoes to update quantity')

        const response =await updateStockHandlers(products)

        response.error ? res.status(400).send(response.error) : res.json(response); 

    }catch(error){
        return res.status(500).send(error.message);

    }

}
module.exports={updateStockControllers}