const atelierService = require("../services/atelier.service");



const createAtelier = async (req, res) => {
    try {
        const atelier = await atelierService.createAtelier(req.body);

        res.status(201).json({
            message: "Atelier created successfully",
            atelier
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};



const getAteliers = async (req, res) => {
    try {
        const ateliers = await atelierService.getAteliers();

        res.status(200).json({
            ateliers
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};



const getAtelierById = async (req, res) => {
    try {
        const atelier = await atelierService.getAtelierById(req.params.id);

        if (!atelier) {
            return res.status(404).json({
                message: "Atelier not found"
            });
        }

        res.status(200).json({
            atelier
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};



const updateAtelier = async (req, res) => {
    try {
        const atelier = await atelierService.updateAtelier(
            req.params.id,
            req.body
        );

        if (!atelier) {
            return res.status(404).json({
                message: "Atelier not found"
            });
        }

        res.status(200).json({
            message: "Atelier updated successfully",
            atelier
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};



const deleteAtelier = async (req, res) => {
    try {
        const atelier = await atelierService.deleteAtelier(req.params.id);

        if (!atelier) {
            return res.status(404).json({
                message: "Atelier not found"
            });
        }

        res.status(200).json({
            message: "Atelier deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};


module.exports = {
    createAtelier,
    getAteliers,
    getAtelierById,
    updateAtelier,
    deleteAtelier
};