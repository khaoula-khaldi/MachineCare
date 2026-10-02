const panneRepository = require("../repositories/panne.repository");
const machineRepository = require("../repositories/machine.repository");

const createPanne = async (data, userId) => {

    if (!data.machine_id) {
        throw new Error("machine_id is required");
    }

    if (!data.description || data.description.trim() === "") {
        throw new Error("description is required");
    }

    const machine = await machineRepository.getMachineById(
        data.machine_id
    );

    if (!machine) {
        throw new Error("Machine not found");
    }

    const panneData = {
        machine_id: data.machine_id,
        user_id: userId,
        description: data.description,
        statut: "ouvert"
    };

    return panneRepository.createPanne(panneData);
};

module.exports = {
    createPanne
};