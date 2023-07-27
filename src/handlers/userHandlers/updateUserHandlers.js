const {User}=require('../../db')

const updateUserHandlers=async( name, phone, last_name, picture, address, active, administrator, id)=>{

    try{
        const user= await User.findByPk(id);

        if (!user) throw Error (`user name: ${name} not found`)

        const updatedData = {};

        if (name) updatedData.name = name;
        if (phone) updatedData.phone = phone;
        if (last_name) updatedData.last_name = last_name;
        if (picture) updatedData.picture = picture;
        if (address) updatedData.address= address;
        if (active !==undefined) updatedData.active= active;
        if (administrator !==undefined) updatedData.administrator= administrator;

        if (Object.keys(updatedData).length > 0) {
            await User.update(updatedData, {
              where: {
                id: id,
              }
            });
        }

        const updatedUser = await User.findByPk(id, {
          attributes: { exclude: ['password'] }
        });
        
        return updatedUser
        
    }catch(error){

      return error.message;
      
    }

}

module.exports={updateUserHandlers}