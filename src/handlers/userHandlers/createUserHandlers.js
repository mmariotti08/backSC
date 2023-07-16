const {User}=require('../../db')

const createUserHandlers=async({name, mail, password, phone, last_name, address})=>{
    
    try{
        const [user, create]=await User.findOrCreate({
            where: {mail},
            defaults: {name, password, last_name, phone, address}
        })

        if (create){
            const userData={
                id: user.id,
                name: user.name,
                last_name: user.name,
                mail: user.mail,
                phone: user.phone
            }
            return {message: 'new user registered successfully', userData}
        }else{
            return {message: `email: ${mail} was already registered previously`}

        }

    }catch(error){
        return error.message;

    }

}

module.exports={createUserHandlers}