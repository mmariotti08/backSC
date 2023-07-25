
const mercadopago=require('mercadopago')
require('dotenv').config();
const {TOKEN_MP } = process.env;

const createOrder=async(req,res)=>{
    const data=req.body
    const product=data.cardPey
    const user=data.idUser
    console.log(product)

    try{
        mercadopago.configure({
            access_token: TOKEN_MP
        });

        const itemsProduct = product?.length > 0
        ? product.map((element) => {
        // const mainPictureUrlArray = Array.isArray(element.main_picture_url)
        // ? element.main_picture_url
        // : [element.main_picture_url];
        return {
            title: element.name,
            unit_price: parseInt(element.retail_price_cents.toString().slice(0, -2)),
            currency_id: 'ARS',
            quantity: element.quantity,
            description: element.brand_name,
            pictures: element.main_picture_url,
            id: element.id,
            category_id: element.size 
        }}): [];

        console.log('arryasDeString',itemsProduct)

        
        const result= await mercadopago.preferences.create({
            items: itemsProduct,
            external_reference: user.id,
            installments: 1,
            back_urls:{
                success: 'http://localhost:3000/successfull',
                failure: 'http://localhost:3001/order/payment/failure',
                pending: 'http://localhost:3001/order/payment/pending',
            },
            notification_url: 'https://2044-2803-9800-9001-c29f-595d-6da0-6a4b-30e9.ngrok-free.app/payment/webhook'
        });

            //https://shopconnect-bj22.onrender.com/
        res.send(result.body)

    }catch(error){
        return {error: error.message}
    }
}

module.exports={createOrder}