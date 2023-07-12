const {User}=require('../../db')

const createUserHandlers=async(name,  mail, phone, password, last_name)=>{
    try{
        const [user, create]=await User.findOrCreate({
            where: {mail: `%${mail}%`},
            default: {name, phone, password, last_name}
        })

        if (create){
            return {message: 'new user registered successfully', user}
        }else{
            return {message: 'already registered user', user}

        }

    }catch(error){
        return error.message;

    }

}

module.exports={createUserHandlers}