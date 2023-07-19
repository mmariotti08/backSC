const {User}=require('../../db')

const createUserHandlers=async({name, mail, password, phone, last_name, address, idUser})=>{
    console.log('objectHandler :>> ', name, mail, password, phone, last_name, address, idUser);
    try{
        const [user, create]=await User.findOrCreate({
            where: {mail},
            defaults: {name, password, last_name, phone, address, idUser}
        })

        if (create){
            const userData={
                id: user.id,
                idUser: user.idUser,
                name: user.name,
                last_name: user.name,
                mail: user.mail,
                phone: user.phone,
                administrator: user.administrator,
                active: user.active
            }
            return {message: `new user email: ${mail} registered successfully`, userData}
        }else{
            return {error: `${mail} was already registered previously, but Log In successfully`}

        }

    }catch(error){
        return error.message;

    }

}

module.exports={createUserHandlers}