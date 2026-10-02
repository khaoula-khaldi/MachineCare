const Panne = require("../models/panne.model");

const createPanne = (panneData) => {
    return Panne.create(panneData);
};

const getPannes = (filter = {}) => {
    return Panne.find(filter)
        .populate("machine_id")
        .populate("user_id");
};

const getPanneById = (id) => {
    return Panne.findById(id)
        .populate("machine_id")
        .populate("user_id");
};

const updatePanne = (id, panneData) => {
    return Panne.findByIdAndUpdate(
        id,
        panneData,
        {
            new: true,
            runValidators: true
        }
    )
        .populate("machine_id")
        .populate("user_id");
};

const deletePanne = (id) => {
    return Panne.findByIdAndDelete(id);
};

module.exports = {
    createPanne,
    getPannes,
    getPanneById,
    updatePanne,
    deletePanne
};