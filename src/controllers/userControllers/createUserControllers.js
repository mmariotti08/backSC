const {createUserHandlers}=require('../../handlers/userHandlers/createUserHandlers')
const {encryptPassword}=require('../../helpers/helpers')
const{transporter}=require('../../mail/mailer')

const createUserControllers=async(req,res)=>{
    try{
        const { name, mail, password, phone, last_name, address, idUser }=req.body
        console.log('objectController :>> ', name, mail, password, phone, last_name, address, idUser);
        if ( !mail ) throw Error('missing mail for data for registration')
        if (password)  {
            await encryptPassword(password)
        }

        const response= await createUserHandlers({name, mail, password , phone, last_name, address, idUser})

       





        response.error
        ? res.status(400).send(response.error)
        : res.status(200).json(response);

    }catch(error){

        return res.status(500).json({error: error.message});

    }

}

module.exports={createUserControllers}