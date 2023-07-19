const {User}=require('../../db')

const deleteUserHandlers=async(id)=>{
    try{
        const response= await User.destroy({where: {id}})

        if(!response) {
            return {error: `Cant found element num ${id}`}
        }else {
            return {message: `User deleted successfully`};
        }

    }catch(error){

        return error.message;
    }

}

module.exports={deleteUserHandlers}