const {Car}=require('../../db')
const deleteOneCarHandler=async(id)=>{
    try{
        const deleteOneCar= await Car.destroy(
            {where: {id}}
        )
        if(!deleteOneCar) {
            return {error: `Cant found shoes id:  ${id}`}
        }else {
            return {message: `Shoes deleted successfully`};
        }

    }catch(error){
        return {error: error.message}

    }

}

module.exports={deleteOneCarHandler}