
const {receiveWebHookHandlers}=require('../../handlers/paymentHandlers/receiveWebHookHandlers')

const receiveWebHookControllers = async (req, res) => {
    try {
      const payment = req.query;
      console.log('payment**********',payment)

      const response=receiveWebHookHandlers(payment)

      response.error
      ? res.status(400).send(response.error)
      : res.json(response);
    
    } catch (error) {

      res.status(500).json({ error: error.message });
    }
} 
module.exports = { receiveWebHookControllers }

