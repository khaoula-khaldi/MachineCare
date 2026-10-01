require("dotenv").config();

const express = require("express");
const connectDb = require('./src/config/database');
const usersRoutes = require("./src/routes/user.routes");
const dashboardRoutes = require("./src/routes/dashboard.routes");

const app=express();
app.use(express.json());
app.use("/api/users",usersRoutes);
app.use("/api/dashboard", dashboardRoutes);

connectDb();

const PORT = process.env.PORT || 3000;

app.listen(3000,()=>{
    console.log("server running on port 3000");
})

