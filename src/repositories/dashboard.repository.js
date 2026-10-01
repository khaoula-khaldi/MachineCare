const User = require("../models/user.model");

const Atelier = require("../models/atelier.model");

const Machine = require("../models/machine.model");

const Panne = require("../models/panne.model");


const getUsersCount = () => {
    return User.countDocuments();
};

const getAtelierCount = () => {
    return Atelier.countDocuments();
};

const getMachineCount = () => {
    return Machine.countDocuments();
};

const getPanneCount = () => {
    return Panne.countDocuments();
};


module.exports = {
    getUsersCount,
    getAtelierCount,
    getMachineCount,
    getPanneCount
};