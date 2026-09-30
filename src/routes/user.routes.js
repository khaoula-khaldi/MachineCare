const express = require("express");
const userController = require("../controllers/user.controller");

const route = express.Router();

route.post("/register", userController.register);

module.exports = route