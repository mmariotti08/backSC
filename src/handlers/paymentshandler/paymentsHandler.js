const stripe = require("stripe")("sk_test_51NTD2jHHHzRx12HMaJ1q91zGI7qOgQlAkEemqV6ZKttKtLG02R63ps6PfqsO0RsJAPhNEZUh72ROc6cf8qy0Oc6200lxyydYzx")



const createPayments = async (req, res) => {
  
  const items = req.body.items;
  console.log(items);
  let arrayItems = [];
  items.forEach((item) => {
    arrayItems.push({
      price: item.idPrice,
      quantity: item.quantity,
    });
  });


  const session = await stripe.checkout.sessions.create({
    line_items: arrayItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
};



module.exports = { createPayments }; 