const express = require("express");

const route = express.Router();

const atelierController = require("../controllers/atelier.controller");
const authMiddleware = require("../middlewares/auth.middleware");


route.post( "/create", authMiddleware, atelierController.createAtelier );

route.get( "/", authMiddleware, atelierController.getAteliers );

route.get( "/:id", authMiddleware, atelierController.getAtelierById );

route.put( "/:id", authMiddleware, atelierController.updateAtelier );

route.delete( "/:id", authMiddleware, atelierController.deleteAtelier );


module.exports = route;