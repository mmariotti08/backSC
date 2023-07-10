const { createProductBdHandlers } = require('../handlers/createProductBd');

const createProduct = async(req, res)=>{
    try{
        const {
            product: { 
                name, 
                brand_name, 
                category, 
                color, 
                gender, 
                main_picture_url, 
                retail_price_cents, 
                slug, 
                status 
            },
            stock } = req.body;

        if (!name || !brand_name || !category || !color || !gender || !main_picture_url || !retail_price_cents || !slug || !status || !stock.length) throw Error('missing data for registration');
        
        const product_stock = await createProductBdHandlers(name, brand_name, category, color, gender, main_picture_url, retail_price_cents, slug, status, stock);

        product_stock.error
            ? res.status(400).send(product_stock.error)
            : res.status(200).json(product_stock);
    }catch(error){
        console.log("AQUI 4");
        return res.status(500).json({error: error.message});
    };
};

module.exports = { createProduct };
