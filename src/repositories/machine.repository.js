const Machine = require("../models/machine.model");

const createMachine = (machineData) => {
    return Machine.create(machineData);
};

const getMachines = () => {
    return Machine.find().populate("atelier_id");
};

const getMachineById = (id) => {
    return Machine.findById(id).populate("atelier_id");
};

const updateMachine = (id, machineData) => {
    return Machine.findByIdAndUpdate(
        id,
        machineData,
        { new: true }
    ).populate("atelier_id");
};

const deleteMachine = (id) => {
    return Machine.findByIdAndDelete(id);
};

module.exports = {
    createMachine,
    getMachines,
    getMachineById,
    updateMachine,
    deleteMachine
};