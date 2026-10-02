const express = require("express");

const machineController = require("../controllers/machine.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const route = express.Router();

route.post("/create",authMiddleware,machineController.createMachine);

route.get("/",authMiddleware,machineController.getMachines);

route.get("/:id",authMiddleware,machineController.getMachineById);

route.put("/:id",authMiddleware,machineController.updateMachine);

route.delete("/:id",authMiddleware,machineController.deleteMachine);

module.exports = route;