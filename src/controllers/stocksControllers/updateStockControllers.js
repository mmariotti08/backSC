const {updateStockHandlers}=require('../../handlers/stocksHandlers/updateStockHandlers')

const updateStockControllers=async(req,res)=>{
    try{
        console.log('controllers++',products,status)

        const response =await updateStockHandlers(products,status)

        console.log('responseControllers++',response)

        response.error ? res.status(400).send(response.error) : res.json(response);

    }catch(error){
        return res.status(500).send(error.message);

    }

}
module.exports={updateStockControllers}