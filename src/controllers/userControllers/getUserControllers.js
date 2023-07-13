const {getUserHandlers}=require('../../handlers/userHandlers/getUserHandlers')

const getUsersControllers=async(req,res)=>{
    const {name}=req.query
    try{
        const response= await getUserHandlers(name)

        response.error ? res.status(400).send(response.error)
        : res.json(response)

    }catch(error){

        return res.status(500).send(error.message);

    }
    

}



module.exports={getUsersControllers}