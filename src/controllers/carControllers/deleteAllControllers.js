const {deleteAllCarHandlers}=require('../../handlers/carHandlers/deleteAllCarHandlers')
const deleteAllControllers=async(req,res)=>{
    try{
        const response= await deleteAllCarHandlers()

        response.error ?  res.status(400).send(response.error) : res.status(200).send(response.message)

    }catch(error){

        return res.status(500).send(error.message);
    }
    

}

module.exports={deleteAllControllers}