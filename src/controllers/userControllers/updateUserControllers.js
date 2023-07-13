const {updateUserHandlers}=require('../../handlers/userHandlers/updateUserHandlers')

const updateUserControllers=async(req,res)=>{
    const {name, phone, last_name}=req.body
    const {id}=req.params
    try{
        const response= await updateUserHandlers(name, phone, last_name, id)
        console.log('controllers',response)

        response.error ? res.status(400).send(response.error) : res.json(response)


    }catch(error){

        return res.status(500).json({error: "User not update"})
    }
    

}

module.exports={updateUserControllers}