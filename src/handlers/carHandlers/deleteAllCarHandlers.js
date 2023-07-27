const {Car}=require('../../db')
const deleteAllCarHandlers=async()=>{
    try{
        const deleteAll= await Car.destroy({})

        if(deleteAll.error) {
            return {error: 'Could not delete all shoes'}
        }else {
            return {message: `Shoes deleted successfully`};
        }

    }catch(error){
        return {error: error.message}
    }
    
}

module.exports={deleteAllCarHandlers}