const {createUserHandlers}=require('../../handlers/userHandlers/createUserHandlers')

const createUserControllers=async(req,res)=>{

    const {name, mail, password, phone, last_name}=req.body

    try{

        if (!name || !mail) throw Error('missing data for registration')

        const response= await createUserHandlers(name, mail, password, phone, last_name)

        response.error
        ? res.status(400).send(response.error)
        : res.status(200).json(response);

    }catch(error){

        return res.status(500).json({error: error.message});

    }

}

module.exports={createUserControllers}