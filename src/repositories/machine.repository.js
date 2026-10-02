const Machine = require("../models/machine.model");


const createMachine=(dataMachine)=>{
    return Machine.create(dataMachine);
}

module.exports = {createMachine}