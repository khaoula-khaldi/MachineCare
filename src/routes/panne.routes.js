const express = require("express");

const panneController = require("../controllers/panne.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const route = express.Router();

route.post("/create",authMiddleware,panneController.createPanne);

// route.get("/",authMiddleware,panneController.getPannes);

// route.get("/:id",authMiddleware,panneController.getPanneById);

// route.put("/:id",authMiddleware,panneController.updatePanne);

// route.delete("/:id",authMiddleware,panneController.deletePanne);

module.exports = route;