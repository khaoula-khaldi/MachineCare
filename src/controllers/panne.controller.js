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

module.exports = {
    createPanne
};