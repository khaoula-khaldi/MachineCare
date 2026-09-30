const userService = require("../services/user.service"); 

const register = async(req,res)=>{
    try{
        const user = await userService.register(req.body);
        res.status(201).json({
            message : "user create successfully",
            user
        });
    }catch(error){
        res.status(400).json({
            message : error.message
        })
    }
}
module.exports = {register}