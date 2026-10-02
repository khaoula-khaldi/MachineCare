const atelierRepository = require("../repositories/atelier.repository");

const createAtelier = async (atelierData) => {
    return atelierRepository.createAtelier(atelierData);
};

const getAteliers = async () => {
    return atelierRepository.getAteliers();
};

const getAtelierById = async (id) => {
    return atelierRepository.getAtelierById(id);
};

const updateAtelier = async (id, atelierData) => {
    return atelierRepository.updateAtelier(id, atelierData);
};

const deleteAtelier = async (id) => {
    return atelierRepository.deleteAtelier(id);
};

module.exports = {
    createAtelier,
    getAteliers,
    getAtelierById,
    updateAtelier,
    deleteAtelier
};