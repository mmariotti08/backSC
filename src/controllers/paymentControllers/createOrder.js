const mercadopago=require('mercadopago')
require('dotenv').config();
const {TOKEN_MP } = process.env;

const createOrder=async(req,res)=>{
    const data=req.body
    const product=data.cardPey
<<<<<<< HEAD
    console.log('prtoduttt', product);
    const user=data.user
    console.log('iduser', user);

=======
    const user=data.user
    console.log('carrito',product)
   
>>>>>>> luis-back-martes
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
            currency_id: 'USD',
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
                success: 'https://shopconnectt.onrender.com/successfull',
                failure: 'https://shopconnectt.onrender.com/',
                pending: 'https://shopconnect-bj22.onrender.com/order/payment/pending',
            },
<<<<<<< HEAD
            notification_url: 'https://shopconnect-bj22.onrender.com/payment/webhook'
        
          
        //     success: ' http://localhost:3000/successfull',
        //     failure: ' http://localhost:3000/',
        //     pending: ' http://localhost:3001/order/payment/pending',
        // },
        // notification_url: 'localhost3001/payment/webhook'
            
=======
            notification_url: 'https://b8a3-2803-9800-9001-c29f-e50f-546b-6bc7-9391.ngrok-free.app/payment/webhook'
>>>>>>> luis-back-martes
        
        });

        console.log(result.body);

         //https://shopconnect-bj22.onrender.com/
        res.send(result.body)

    }catch(error){
        console.error(error)
        return {error: error.message}
    }
}

module.exports={createOrder}