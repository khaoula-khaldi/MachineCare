const machineService = require("../services/machine.service");

const createMachine = async (req, res) => {
    try {
        const machine = await machineService.createMachine(req.body);

        res.status(201).json({
            message: "Machine created successfully",
            machine
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const getMachines = async (req, res) => {
    try {
        const machines = await machineService.getMachines();

        res.status(200).json({
            machines
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getMachineById = async (req, res) => {
    try {
        const machine = await machineService.getMachineById(
            req.params.id
        );

        if (!machine) {
            return res.status(404).json({
                message: "Machine not found"
            });
        }

        res.status(200).json({
            machine
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const updateMachine = async (req, res) => {
    try {
        const machine = await machineService.updateMachine(
            req.params.id,
            req.body
        );

        if (!machine) {
            return res.status(404).json({
                message: "Machine not found"
            });
        }

        res.status(200).json({
            message: "Machine updated successfully",
            machine
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const deleteMachine = async (req, res) => {
    try {
        const machine = await machineService.deleteMachine(
            req.params.id
        );

        if (!machine) {
            return res.status(404).json({
                message: "Machine not found"
            });
        }

        res.status(200).json({
            message: "Machine deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

module.exports = {
    createMachine,
    getMachines,
    getMachineById,
    updateMachine,
    deleteMachine
};