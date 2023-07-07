
const {createProductBdHandlers}=require('../handlers/createProductBd')

const createProduct= async(req, res)=>{
    try{
        const {	name, brand_name, category, color, gender, main_picture_url, retail_price_cents, slug, status, size, quantity }=req.body

        if (!name || !brand_name || !category || !color || !gender || !main_picture_url || !retail_price_cents || !slug || !status || !size || !quantity) throw Error('missing data for registration')

        const create= await createProductBdHandlers(name, brand_name, category, color, gender, main_picture_url, retail_price_cents, slug, status, size, quantity)

        create.error ? res.status(400).send(create.error)
        : res.json(create) 

    }catch(error){

        return res.status(500).json({error: error.message});
    }
}


module.exports={
    createProduct
}