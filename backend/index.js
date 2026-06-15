const express=require("express");
const app=express();
const mongoose=require('mongoose')
const cors=require("cors")
require('dotenv').config();
const bodyparser=require("body-parser");
const authRoutes = require("./authroutes");

const mongodb=require("./db");


const PORT=process.env.PORT || 8000;
mongodb();
app.use(cors());
app.use(bodyparser.json());
app.use("/api/auth", authRoutes);


app.listen(PORT,()=>{
    console.log("backend started");
})
