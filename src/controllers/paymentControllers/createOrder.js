
const mercadopago=require('mercadopago')
require('dotenv').config();
const {TOKEN_MP } = process.env;

const createOrder=async(req,res)=>{
    const data=req.body
    console.log('dataaa', data);
    const product=data.cardPey
    console.log('prtoduttt', product);
    const user=data.user
    console.log('iduser', user);

    try{
        mercadopago.configure({
            access_token: TOKEN_MP
        });

        const itemsProduct = product?.length > 0
        ? product.map((element) => {
        const mainPictureUrlArray = Array.isArray(element.main_picture_url)
        ? element.main_picture_url
        : [element.main_picture_url];
        return {
            title: element.name,
            unit_price: parseInt(element.retail_price_cents.toString().slice(0, -2)),
            currency_id: "USD",
            quantity: element.quantity,
            description: element.brand_name,
            picture_url: mainPictureUrlArray[0],
            id: element.id,
            category_id: element.size
        }}): [];








        const result= await mercadopago.preferences.create({
            items: itemsProduct,
            external_reference: user.id,
            installments: 1,
            back_urls:{
                success: 'https://shopconnectt.onrender.com//successfull',
                failure: 'https://shopconnectt.onrender.com/',
                pending: 'https://shopconnect-bj22.onrender.com/order/payment/pending',
            },
            notification_url: 'https://shopconnect-bj22.onrender.com/payment/webhook'
        
          
        //     success: ' http://localhost:3000/successfull',
        //     failure: ' http://localhost:3000/',
        //     pending: ' http://localhost:3001/order/payment/pending',
        // },
        // notification_url: 'localhost3001/payment/webhook'
            
        
        });

        console.log('result.body', result.body);

         //https://shopconnect-bj22.onrender.com/
        res.send(result.body)

    }catch(error){
        console.error(error)
        return {error: error.message}
    }
}

module.exports={createOrder}