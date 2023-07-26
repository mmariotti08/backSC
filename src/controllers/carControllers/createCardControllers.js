const {createCardHandlers}=require('../../handlers/carHandlers/createCardHandlers')

const createCardControllers=async(req,res)=>{
    try{
        const data=req.body

        console.log('dataaa****', data)
        const cleanData={
            productId: data.item.id,
            iD_User: data.user.id,
            name: data.item.name,
            main_picture_url: data.item.main_picture_url,
            retail_price_cents: data.item.retail_price_cents,
            size: data.item.size,
            quantity: data.item.quantity
        }
        const {productId, iD_User, name, main_picture_url, retail_price_cents, size, quantity}=cleanData
        console.log('cleanData******',cleanData)

        const response= await createCardHandlers({productId, iD_User, name, main_picture_url, retail_price_cents, size, quantity})
        console.log('responseControllers', response)

        response.error ? res.status(400).send(response.error) : res.status(200).json(response);


    }catch(error){

        return res.status(500).json({error: error.message});
    }

}

module.exports={createCardControllers}