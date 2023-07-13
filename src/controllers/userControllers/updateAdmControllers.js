const {userUpdateHandlers}=require('../../handlers/userHandlers/userUpdateHandlers')

const updateAdmControllers=async(req,res)=>{
    const {active}=req.body
    const {id}=req.params
    try{
        const response= await userUpdateHandlers(active, id)

        response.error ? res.status(400).send(response.error) : res.json(response)

    }catch(error){

        return res.status(500).json({error: "User not update"})
    }

}

module.exports={updateAdmControllers}