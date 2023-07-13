const {User}=require('../../db')

const createUserHandlers=async(fullName, mail, password, phone)=>{
    
    try{
        const [user, create]=await User.findOrCreate({
            where: {mail},
            defaults: {fullName, password, phone}
        })

        if (create){
            return {message: 'new user registered successfully', user}
        }else{
            return {message: `email: ${mail} was already registered previously`}

        }

    }catch(error){
        return error.message;

    }

}

module.exports={createUserHandlers}