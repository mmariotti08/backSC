const {createUserHandlers}=require('../../handlers/userHandlers/createUserHandlers')
const {encryptPassword}=require('../../helpers/helpers')

const createUserControllers=async(req,res)=>{
    try{
        const {name, mail, password, phone, last_name, address}=req.body
        if ( !mail || !password) throw Error('missing data for registration')

        const passwordHash=await encryptPassword(password)

        const response= await createUserHandlers({name, mail, password: passwordHash , phone, last_name, address})

        response.error
        ? res.status(400).send(response.error)
        : res.status(200).json(response);

    }catch(error){

        return res.status(500).json({error: error.message});

    }

}

module.exports={createUserControllers}