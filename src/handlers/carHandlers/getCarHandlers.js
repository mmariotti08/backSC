const {Car}=require('../../db')

const getCarHandlers=async()=>{
    try{
        const findCar=await Car.findAll()

        if (findCar){
            return findCar;
        }else{
            return {error: 'card not found'}
        }

    }catch(error){
        return {error: error.message}
    }
}

module.exports={getCarHandlers}