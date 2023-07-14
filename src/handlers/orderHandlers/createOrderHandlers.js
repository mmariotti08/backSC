const { Order } = require('../../db');

const createOrderHandlers=async(description, userId)=>{
    try{
        const createOrder= await Order.create({description})
        await createOrder.setUser(userId);

        return orderCreate;

    }catch(error){

        return error.message;
    }

}

module.exports={ createOrderHandlers }