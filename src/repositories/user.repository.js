const User = require("../models/user.model");

const createUser = (userData)=>{
    return User.create(userData);
}
const findUserByEmail = (email)=>{
    return User.findOne({email});
} 

module.exports = {createUser,findUserByEmail};