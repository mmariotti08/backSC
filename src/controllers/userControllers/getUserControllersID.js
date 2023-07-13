const {getUserHandlersID}=require('../../handlers/userHandlers/getUserHandlersID')

const getUserControllersID=async(req,res)=>{
    const {id}=req.params
    try{
        const response=await getUserHandlersID(id)

        response.error ? res.status(400).send(response.error)
        : res.json(response)

    }catch(error){

        return res.status(500).json({error: "Error getting user"})

    }

}

module.exports={getUserControllersID}