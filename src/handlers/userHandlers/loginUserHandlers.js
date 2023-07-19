const {User}=require('../../db')
const {tokenSing}=require('../../helpers/token')

const {compare}=require('../../helpers/helpers')

const loginUserHandlers=async(mail,password)=>{
    try{
        const userLogin= await User.findOne({
            where: {mail: mail}
        })

        if (!userLogin) throw Error(`mail: ${mail} not found`)
        if (userLogin.active === false) throw Error(`User: ${mail} Banned, contact to 0800-41854165 or shopConnect@gmail.com`)

        const checkPassword= await compare(password, userLogin.password)

        const tokenSession=await tokenSing(userLogin)

        if (checkPassword){
            const cleanUser={
                id: userLogin.id,
                mail: userLogin.mail,
                name: userLogin.name,
                active: userLogin.active,
                administrator: userLogin.administrator

            };

            return ({
                data: cleanUser,
                tokenSession
            })
            
        }else{
            return {error: `the mail: ${mail} and password ${password} do not match`}
        }

    }catch(error){
        return error.message;
    }

}

module.exports={loginUserHandlers}