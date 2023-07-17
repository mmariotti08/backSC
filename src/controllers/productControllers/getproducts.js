const {getProductsHandlers}=require('../../handlers/productsHandlres/getProductsHandler')

const getProducts = async (req, res) => {
    const {name}=req.query
    try {
        const product= await getProductsHandlers(name);

        product.error
            ? res.status(400).send(product.error)
            : res.json(product);
    } catch (error) {
        return res.status(500).send(error.message);
    };
};

module.exports = { getProducts };