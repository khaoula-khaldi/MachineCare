const Atelier = require("../models/atelier.model");


const createAtelier = (atelierData) => {
    return Atelier.create(atelierData);
};


const getAteliers = () => {
    return Atelier.find();
};


const getAtelierById = (id) => {
    return Atelier.findById(id);
};


const updateAtelier = (id, atelierData) => {
    return Atelier.findByIdAndUpdate(
        id,
        atelierData,
        { new: true }
    );
};


const deleteAtelier = (id) => {
    return Atelier.findByIdAndDelete(id);
};


module.exports = {
    createAtelier,
    getAteliers,
    getAtelierById,
    updateAtelier,
    deleteAtelier
};