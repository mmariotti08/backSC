const {createUserHandlers}=require('../../handlers/userHandlers/createUserHandlers')

const createUserControllers=async(req,res)=>{
    const {name, user,  mail, phone, password, last_name}=req.body
    try{
        if (!name || !mail) throw Error('missing data for registration')

        const response= await createUserHandlers(name, user,  mail, phone, password, last_name)
        console.log(response)

        response.error
        ? res.status(400).send(response.error)
        : res.status(200).json(response);

    }catch(error){

        return res.status(500).json({error: error.message});

    }

}

module.exports={createUserControllers}