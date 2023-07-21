const {loginUserHandlers}=require('../../handlers/userHandlers/loginUserHandlers')
const loginUserCompare=async(req,res)=>{
    try{
        const {mail, password}=req.body

        const response= await loginUserHandlers(mail, password)
        
        response.error ? res.status(400).send(response.error) : res.send(response)

    }catch(error){

        return res.status(500).json({Error: "error querying user data"})
    }
    

}

module.exports={loginUserCompare}