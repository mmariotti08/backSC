const Stripe = require("stripe");

const stripe = new Stripe("sk_test_51NTD2jHHHzRx12HMaJ1q91zGI7qOgQlAkEemqV6ZKttKtLG02R63ps6PfqsO0RsJAPhNEZUh72ROc6cf8qy0Oc6200lxyydYzx")



const createPayments = async (req, res) => {
    const { id, amount } = req.body;

    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: "Gaming Keyboard",
        payment_method: id,
        confirm: true, //confirm the payment at the same time
      });
  
      console.log(payment);
  
      return res.status(200).json({ message: "Successful Payment" });
    } catch (error) {
      console.log(error);
      return res.json({ message: error.raw.message });
    }
  };


module.exports = { createPayments }; 