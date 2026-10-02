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
        description: data.description.trim(),
        statut: "ouvert"
    };

    return panneRepository.createPanne(panneData);
};


const getPannes = async (filter) => {
    return panneRepository.getPannes(filter);
};


const getPanneById = async (id) => {
    return panneRepository.getPanneById(id);
};


const updatePanne = async (id, data) => {

    const panne = await panneRepository.getPanneById(id);

    if (!panne) {
        throw new Error("Panne not found");
    }

    if (data.description !== undefined) {

        if (data.description.trim() === "") {
            throw new Error("description cannot be empty");
        }

        data.description = data.description.trim();
    }

    if (data.statut) {

        const allowedStatuses = [
            "ouvert",
            "en_cours",
            "resolu"
        ];

        if (!allowedStatuses.includes(data.statut)) {
            throw new Error("Invalid statut");
        }

        if (data.statut === "resolu") {

            if (
                !data.note_resolution ||
                data.note_resolution.trim() === ""
            ) {
                throw new Error(
                    "note_resolution is required to resolve the panne"
                );
            }

            data.note_resolution = data.note_resolution.trim();

            data.date_resolution = new Date();
        }
    }

    return panneRepository.updatePanne(id, data);
};


const deletePanne = async (id) => {

    const panne = await panneRepository.getPanneById(id);

    if (!panne) {
        throw new Error("Panne not found");
    }

    return panneRepository.deletePanne(id);
};


module.exports = {
    createPanne,
    getPannes,
    getPanneById,
    updatePanne,
    deletePanne
};