
const {receiveWebHookHandlers}=require('../../handlers/paymentHandlers/receiveWebHookHandlers')

const receiveWebHookControllers = async (req, res) => {
    try {
      const payment = req.query;

      const response=receiveWebHookHandlers(payment)

      response.error
      ? res.status(400).send(response.error)
      : res.json(response);
    
    } catch (error) {

      res.status(500).json({ error: error.message });
    }
} 
module.exports = { receiveWebHookControllers }

//        este codigo comentado es el viejo el nuevo quedo modularizado una parte aca y otra parte al controllers
//       en caso de emergencia desbloquear este codigo y eliminar handlers/paymentHandlres/receiveWebhoo...
// const mercadopago = require("mercadopago");
// const {createOrderHandlers}=require('../../handlers/orderHandlers/createOrderHandlers')
////const {updateStockHandlers}=require('../../handlers/stocksHandlers/updateStockHandlers')

// const receiveWebHookControllers = async (req, res) => {
//     try {
//       const payment = req.query;

//       if (payment.type === 'payment') {
//         const data = await mercadopago.payment.findById(payment['data.id'])

//         const cleanData={
//             userId: data.body.external_reference,
//             payment_method: data.body.payment_type_id,
//             total_amount: data.body.transaction_details.total_paid_amount,
//             status: data.body.status_detail,
//             description: 'ShopConnect the best shoes, Buenos Aires-Argentina 🌎👟',
//             delivery_date: data.body.date_approved,
//             products: data.response.additional_info.items.map(element => ({
//                 productId: element.id,
//                 size: element.category_id,
//                 quantity: element.quantity
//             }))
//         }

//         const {userId,payment_method,total_amount,description,products,delivery_date,status}=cleanData

      
//         const order= await createOrderHandlers({userId,payment_method,total_amount,description,products,delivery_date,status})
//         if (order.error) {
//           return res.status(400).send(order.error);
//         }
//         return res.status(200).json(order);
    
//       }
//       //res.sendStatus(204);
  
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
// } 
// module.exports = { receiveWebHookControllers }
