const { Product} = require('../db');

const getIdHandler=async(id)=>{
    try {
        const responseDb = await Product.findByPk(id);

        if (!responseDb){
            return {error: `the shoes num ${id} not found `}
        }else{
            return responseDb
        }

    } catch (error) {

        return error.message
    }

}

module.exports={
    getIdHandler
}
