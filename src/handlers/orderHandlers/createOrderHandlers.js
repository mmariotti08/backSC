const { Order } = require('../../db');

const createOrderHandlers=async(description, userId)=>{
    //console.log('handlers+++',description)
    try{
        const createOrder= await Order.create({description})
        await createOrder.setUser(userId);
        //console.log(aux)

        return orderCreate;

    }catch(error){

        return error.message;
    }

}

module.exports={createOrderHandlers}