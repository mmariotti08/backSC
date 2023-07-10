const {getIdHandler}=require('../handlers/getIdHandlers')


const getProductsID = async (req, res) => {
    const {id}  =  req.params;
    try{
        const response= await getIdHandler(id)

        response.error ? res.status(400).send(response.error)
        : res.json(response)

    }catch(error){
        return res.status(500).json({error: "Error getting products"})

    }
}


module.exports ={getProductsID}