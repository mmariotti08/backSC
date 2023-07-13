const {updateProductHandlers}=require('../handlers/updateProductHandlers')

const updateProduct = async (req,res) =>{
    const { product: { name, brand_name, category, color, gender, main_picture_url, retail_price_cents, slug, status }, stock } = req.body;
    const { id } = req.params;
    try{
        const update= await updateProductHandlers({ name, brand_name, category, color, gender, main_picture_url, retail_price_cents, slug, status },stock, id);
        update.error ? res.status(400).send(update.error) : res.json(update);
    }catch(error){
        return res.status(500).json({ error: "Product not update" });
    };
};

module.exports = { updateProduct };