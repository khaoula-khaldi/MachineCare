const express = require("express");

const dashboardController = require("../controllers/dashboard.controller");
const authMiddleware = require("../middlewares/auth.middleware");

const route = express.Router();

route.get("/stats",authMiddleware,dashboardController.getStatistics);

module.exports = route;