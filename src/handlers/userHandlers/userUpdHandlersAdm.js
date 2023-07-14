const { User } = require('../../db');

const userUpdHandlersAdm=async(administrator, id)=>{
    try {

        const updateUser = await User.findByPk(id);
    
        if (!updateUser) throw Error (`User id: ${id} not found`)
    
        await User.update({administrator: administrator},{
            where: {
                id: id,
            }
        })
        return find = await User.findByPk(id);
    
    } catch(error){
    
        return error.message;
    }
}

module.exports={userUpdHandlersAdm}