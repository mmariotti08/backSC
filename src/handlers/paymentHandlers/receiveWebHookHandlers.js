const mercadopago = require("mercadopago");
const { createOrderHandlers } = require('../../handlers/orderHandlers/createOrderHandlers');
const { updateStockHandlers } = require('../../handlers/stocksHandlers/updateStockHandlers');

const receiveWebHookHandlers = async (payment) => {
  try {
    if (payment.type === 'payment') {
      const data = await mercadopago.payment.findById(payment['data.id']);

      const cleanData = {
        userId: data.body.external_reference,
        payment_method: data.body.payment_type_id,
        total_amount: data.body.transaction_details.total_paid_amount,
        status: data.body.status_detail,
        description: 'ShopConnect the best shoes, Buenos Aires-Argentina 🌎👟',
        delivery_date: data.body.date_approved,
        products: data.response.additional_info.items.map(element => ({
          productId: element.id,
          size: element.category_id,
          quantity: element.quantity
        }))
      };

      const { userId, payment_method, total_amount, description, products, delivery_date, status } = cleanData;

      if (status === 'accredited') {
        const order = await createOrderHandlers({ userId, payment_method, total_amount, description, products, delivery_date, status });

        if (order.error) {
          return { error: order.error };
        }
        const update = await updateStockHandlers(products); //desestructurar productos

        if (update.error) {
          return { error: update.error };
        }

        return { order, update };

      }
      return { status: 'Not accredited' };
    }
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { receiveWebHookHandlers };



// const mercadopago = require("mercadopago");
// const {createOrderHandlers}=require('../../handlers/orderHandlers/createOrderHandlers')
// //const {updateStockHandlers}=require('../../handlers/stocksHandlers/updateStockHandlers')

// const receiveWebHookHandlers=async(payment)=>{
//     try{
//         if (payment.type === 'payment') {
//             const data = await mercadopago.payment.findById(payment['data.id'])
    
//             const cleanData={
//                 userId: data.body.external_reference,
//                 payment_method: data.body.payment_type_id,
//                 total_amount: data.body.transaction_details.total_paid_amount,
//                 status: data.body.status_detail,
//                 description: 'ShopConnect the best shoes, Buenos Aires-Argentina 🌎👟',
//                 delivery_date: data.body.date_approved,
//                 products: data.response.additional_info.items.map(element => ({
//                     productId: element.id,
//                     size: element.category_id,
//                     quantity: element.quantity
//                 }))
//             }

//             const {userId,payment_method,total_amount,description,products,delivery_date,status}=cleanData
//             const order= await createOrderHandlers({userId,payment_method,total_amount,description,products,delivery_date,status})
//             //const update= await updateStockHandlers({products})
//             if (order.error) {
//                 return res.status(400).send(order.error);
//             }
//             return res.status(200).json(order);
    
//         }

//     }catch(error){
//         return error.message;

//     }

// }

// module.exports={receiveWebHookHandlers}