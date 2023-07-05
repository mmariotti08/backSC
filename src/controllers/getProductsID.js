const { Product } = require('../db.js');


const getProductsID = async (req, res) => {
    const {id}  =  req.params;
    console.log(id);
    try {
        const p = await Product.findByPk(id);
        if(!p){
            return res.status(404).json({error: 'Not Found'})
        }
        res.json(p)
    } catch (error) {
        res.status(500).json({error: "Error getting products"})
    }

}
module.exports ={getProductsID}