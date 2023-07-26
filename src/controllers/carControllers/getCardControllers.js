const {getCarHandlers}=require('../../handlers/carHandlers/getCarHandlers')
const getCardControllers=async(req,res)=>{
    try{

        const response=await getCarHandlers()

        response.error ? res.status(400).send(response.error) : res.status(200).json(response);

    }catch(error){

        return res.status(500).send(error.message);

    }

}


module.exports={getCardControllers}