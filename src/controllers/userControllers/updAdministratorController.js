const {userUpdHandlersAdm}=require('../../handlers/userHandlers/userUpdHandlersAdm')
const updAdministratorController=async(req,res)=>{
    const {administrator}=req.body
    const {id}=req.params
    try{
        const response= await userUpdHandlersAdm(administrator,id)

        response.error ? res.status(400).send(response.error) : res.json(response)

    }catch(error){

        return res.status(500).json({error: "User not update"})
    }

}

module.exports={updAdministratorController}