require("dotenv").config();

const express = require("express");
const connectDb = require('./src/config/database');

const app=express();
app.use(express.json());

connectDb();

const PORT = process.env.PORT || 3000;

app.listen(3000,()=>{
    console.log("server running on port 3000");
})