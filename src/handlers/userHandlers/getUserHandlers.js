const {User}=require('../../db')
const {Op}= require('sequelize')

const getUserHandlers=async(name)=>{
    try{
        if(name){
            const users= await User.findAll({
                where: {
                    name: { [Op.iLike]: `%${name}%` },
                    active: true
                },
                attributes: { exclude: ['password'] }
            });

            if (users.length>0){
                return users
            }else{
                return {error: `There are no user/s named ${name}`}
            }

        }else{

            const users = await User.findAll();

            return users
        }

    }catch(error){

        return error.message
    }

}

module.exports={getUserHandlers}

// const { User } = require('../../db');
// const { Op } = require('sequelize');

// const getUserHandlers = async (name) => {
//   try {
//     if (name) {
//       const users = await User.findAll({
//         where: {
//           name: { [Op.iLike]: `%${name}%` }
//         },
//         attributes: { exclude: ['password'] }
//       });

//       if (users.length > 0) {
//         return users;
//       } else {
//         return { error: `users: ${name} not found` };
//       }
//     } else {
//       const users = await User.findAll({
//         attributes: { exclude: ['password'] }
//       });

//       if (users.length > 0) {
//         return users;
//       } else {
//         return { error: 'No registered users' };
//       }
//     }
//   } catch (error) {
//     return error.message;
//   }
// };

// module.exports = { getUserHandlers };