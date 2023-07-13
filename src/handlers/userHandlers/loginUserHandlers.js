const {User}=require('../../db')

const {compare}=require('../../helpers/helpers')

const loginUserHandlers=async(mail,password)=>{
    try{
        const userLogin= await User.findOne({
            where: {mail: mail}
        })

        if (!userLogin) throw Error(`mail: ${mail} not found`)


        const checkPassword= await compare(password, userLogin.password)

        if (checkPassword){
            return userLogin
        }else{
            return {error: `the mail: ${mail} and password ${password} do not match`}
        }

    }catch(error){
        return error.message;
    }

}

module.exports={loginUserHandlers}