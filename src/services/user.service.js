const bcrypt = require("bcrypt");
const userRepository = require("../repositories/user.repository");

const register = async(data)=>{
    if(!data.email){
        throw new Error("email is required !");
    }
    if(!data.nom){
        throw new Error("name is required !");
    }
    if(!data.password){
        throw new Error("password is required !");
    }
    const existingEmail = await userRepository.findUserByEmail(data.email);
    if(existingEmail){
        throw new Error("ce mail est déja existe !");
    }
    const hashPassword = await bcrypt.hash(data.password,10);

    const userData = {
        nom : data.nom,
        email : data.email,
        password : hashPassword
    }
    return userRepository.createUser(userData);
}
module.exports = {register}