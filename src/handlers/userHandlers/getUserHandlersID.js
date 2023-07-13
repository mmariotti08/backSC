const {User}=require('../../db')
const getUserHandlersID=async(id)=>{
    try{
        const user= await User.findByPk(id,{
            attributes: { exclude: ['password'] }
        })

        if (!user){
            return {error: `the user id: ${id} not found` }
        }else{
            return user;
        }

    }catch(error){
        
        return error.message
    }

}

module.exports={getUserHandlersID}