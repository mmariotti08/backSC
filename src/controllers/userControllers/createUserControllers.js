const {createUserHandlers}=require('../../handlers/userHandlers/createUserHandlers')

const createUserControllers=async(req,res)=>{

    const {fullName, mail, password, phone}=req.body

    try{

        if (!fullName || !mail) throw Error('missing data for registration')

        const response= await createUserHandlers(fullName, mail, password, phone)

        response.error
        ? res.status(400).send(response.error)
        : res.status(200).json(response);

    }catch(error){

        return res.status(500).json({error: error.message});

    }

}

module.exports={createUserControllers}