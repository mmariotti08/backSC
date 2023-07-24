const {createOrderHandlers}=require('../../handlers/orderHandlers/createOrderHandlers')

const createOrder=async(req,res)=>{
    try{
        let {products, total_amount, description, payment_method,shipping_address, delivery_date, userId}=req.body

        const response= await createOrderHandlers({products, total_amount, description, payment_method,shipping_address, delivery_date, userId})
      
        response.error ? res.status(400).send(response.error) : res.status(200).json(response);

    }catch(error){

        return res.status(500).json({error: error.message});

    }

}

module.exports={createOrder}