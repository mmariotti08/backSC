const {Car, User, Product}=require('../../db')

const createCardHandlers=async({productId, iD_User, name, main_picture_url, retail_price_cents, size, quantity})=>{
    try{
        
        const findProduct= await Product.findByPk(productId);

<<<<<<< HEAD
        let id=iD_User
        const findUser= await User.findOne({
=======
        const id =  iD_User
        const findUser = await User.findOne({
>>>>>>> ab6e0c8a16b051d544ce657bc4320da263af6ce7
            where: { id },
        });

        if (findUser && findProduct){
<<<<<<< HEAD
            const createProduct= await Car.create({

                productId: findProduct.id, userId: findUser.id , name, main_picture_url, retail_price_cents, size, quantity
            })

=======
            const createProduct= await Car.create( {
                productId: findProduct.id, userId: findUser.id , name, main_picture_url, retail_price_cents, size, quantity
            })
            
>>>>>>> ab6e0c8a16b051d544ce657bc4320da263af6ce7
            if (createProduct){
                return createProduct;
            }else{
                return {error: 'Product not saved'}
            }
        }else{
            return {error: 'User not found'}
        }
    }catch(error){

        return { error: error.message };
    }
}

module.exports={createCardHandlers}