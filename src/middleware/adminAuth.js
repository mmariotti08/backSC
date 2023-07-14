const { verifyToken }=require('../helpers/token')
const { User }=require('../db')

const checkAdmAuth = async (req, res, next) => {

    try{
        const token = req.headers.authorization.split(' ').pop();
        const tokenData= await verifyToken(token)
        const userData= await User.findByPk(tokenData.id)

        if (userData.id && userData.administrator === false){
            next()
        }else{
            res.status(409)
            res.send({error: 'You do not have permission to access the page'})

        }
    }catch(error){
        res.status(409)
        res.send({error:'You do not have permission to access the page'})
    }
}

module.exports = {checkAdmAuth}