const machineRepository = require("../repositories/machine.repository");

const createMachine = async (machineData) => {
    return machineRepository.createMachine(machineData);
};

const getMachines = async () => {
    return machineRepository.getMachines();
};

const getMachineById = async (id) => {
    return machineRepository.getMachineById(id);
};

const updateMachine = async (id, machineData) => {
    return machineRepository.updateMachine(id, machineData);
};

const deleteMachine = async (id) => {
    return machineRepository.deleteMachine(id);
};

module.exports = {
    createMachine,
    getMachines,
    getMachineById,
    updateMachine,
    deleteMachine
};