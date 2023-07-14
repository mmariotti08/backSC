const { verifyToken }=require('../helpers/token')
const { User }=require('../db')

const checkActiveUserAuth = async (req, res, next) => {


    try{
        const token = req.headers.authorization.split(' ').pop();
        const tokenData= await verifyToken(token)
        const userData= await User.findByPk(tokenData.id)

        if (userData.id && userData.active === true){
            next()
        }else{
            
            res.status(409)
            res.send({error: 'User Banned, contact to 0800-41854165 or shopConnect@gmail.com'})

        }
    }catch(error){
        res.status(409)
        res.send({error:'User Banned, contact to 0800-41854165 or shopConnect@gmail.com'})
    }
}

module.exports = { checkActiveUserAuth }