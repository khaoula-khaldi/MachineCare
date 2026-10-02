const panneService = require("../services/panne.service");


const createPanne = async (req, res) => {

    try {

        const panne = await panneService.createPanne(
            req.body,
            req.user.userId
        );

        res.status(201).json({
            message: "Panne signalée avec succès",
            panne
        });

    } catch (error) {

        res.status(400).json({
            message: error.message
        });
    }
};


const getPannes = async (req, res) => {

    try {

        const filter = {};

        if (req.query.machine_id) {
            filter.machine_id = req.query.machine_id;
        }

        if (req.query.statut) {
            filter.statut = req.query.statut;
        }

        const pannes = await panneService.getPannes(filter);

        res.status(200).json({
            pannes
        });

    } catch (error) {

        res.status(400).json({
            message: error.message
        });
    }
};


const getPanneById = async (req, res) => {

    try {

        const panne = await panneService.getPanneById(
            req.params.id
        );

        if (!panne) {
            return res.status(404).json({
                message: "Panne not found"
            });
        }

        res.status(200).json({
            panne
        });

    } catch (error) {

        res.status(400).json({
            message: error.message
        });
    }
};


const updatePanne = async (req, res) => {

    try {

        const panne = await panneService.updatePanne(
            req.params.id,
            req.body
        );

        res.status(200).json({
            message: "Panne updated successfully",
            panne
        });

    } catch (error) {

        res.status(400).json({
            message: error.message
        });
    }
};


const deletePanne = async (req, res) => {

    try {

        await panneService.deletePanne(
            req.params.id
        );

        res.status(200).json({
            message: "Panne deleted successfully"
        });

    } catch (error) {

        res.status(400).json({
            message: error.message
        });
    }
};


module.exports = {
    createPanne,
    getPannes,
    getPanneById,
    updatePanne,
    deletePanne
};