
const mercadopago=require('mercadopago')
require('dotenv').config();
const {TOKEN_MP } = process.env;

const createOrder=async(req,res)=>{
    const data=req.body
    const product=data.cardPey
    const user=data.idUser

    try{
        mercadopago.configure({
            access_token: TOKEN_MP
        });

        const itemsProduct = product?.length>0 ? product.map(element => ({
            title: element.name,
            unit_price: parseInt(element.retail_price_cents.toString().slice(0, -2)),
            currency_id: 'ARS',
            quantity: element.quantity,
            description: element.brand_name,
            id: element.id,
            category_id: element.size
        })): [];

        //<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"></meta>


        const result= await mercadopago.preferences.create({
            items: itemsProduct,
            external_reference: user.id,
            installments: 1,
            backs_urls:{
                success: 'http://localhost:3001/payment/success',
                failure: 'http://localhost:3001/payment/failure',
                pending: 'http://localhost:3001/payment/pending',
            },
            notification_url: 'https://0262-152-168-219-181.ngrok-free.app/payment/webhook',
            //back_urls: 'https://shopconnectt.onrender.com/'
        });

        //https://shopconnectt.onrender.com/     para el deploy
    
        res.send(result.body)

    }catch(error){
        return {error: error.message}
    }
}

module.exports={createOrder}