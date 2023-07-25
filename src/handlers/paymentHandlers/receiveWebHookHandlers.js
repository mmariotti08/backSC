const mercadopago = require("mercadopago");
const { transporter } = require('../../mail/mailer');
const { createOrderHandlers } = require('../../handlers/orderHandlers/createOrderHandlers');
const { updateStockHandlers } = require('../../handlers/stocksHandlers/updateStockHandlers');
const {getUserHandlersID}=require('../../handlers/userHandlers/getUserHandlersID')

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
        idMail: data.body.id,
        products: data.body.additional_info.items.map((element) => ({
          productId: element.id,
          name: element.title,
          main_picture_url: [element.picture_url],
          size: element.category_id,
          quantity: element.quantity
        }))
      };

      const { userId, payment_method, total_amount, description, products, delivery_date, status, idMail } = cleanData;

      if (status === 'accredited') {
        const order = await createOrderHandlers({ userId, payment_method, total_amount, description, products, delivery_date, status });

        if (order.error) {
          return { error: order.error };
        }
        const update = await updateStockHandlers(products); 

        if (update.error) {
          return { error: update.error };
        }

        let id=userId
        const sendUserMail= await getUserHandlersID(id)
        await transporter.sendMail({
          from: 'shopconnecthenry@gmail.com',
          to: sendUserMail.dataValues.mail,
          subject: 'Congratulations, your purchase was credited! ShopConnect the best shoes, Buenos Aires-Argentina 🌎👟',
          html: `<h1>Hello ${sendUserMail.dataValues.name}!!,</h1><h2>Thank you for choosing Shop Connect the best shoes, Buenos Aires-Argentina 🌎👟</h2><h3>Payment credited was:</h3><h1>$${total_amount}</h1><h3>the id of your purchase is ${idMail}</h3><h3>For any questions, write to: shopconnecthenry@gmail.com, 👋😃</h3><a href="https://shopconnectt.onrender.com/">BACK TO STORE</a>`
        });

        return { order, update };

      }
      await transporter.sendMail({
        from: 'shopconnecthenry@gmail.com',
        to: sendUserMail.dataValues.mail,
        subject: 'ShopConnect, Buenos Aires-Argentina 🌎👟. Your payment was denied.🚫',
        html: `<h1>We regret to inform you that your payment was denied, contact your card and/or bank to solve it...</h1><h3>For any questions, write to: shopconnecthenry@gmail.com,👋😃</h3><a href="https://shopconnectt.onrender.com/">BACK TO STORE</a>`
      });

      return { status: 'Not accredited' };
    }
  } catch (error) {
    console.error('Error sending Mail', error);
    return { error: error.message };
  }
};

module.exports = { receiveWebHookHandlers };
