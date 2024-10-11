const express = require('express');
const route = express.Router();
const {checkinghostelIsPreseent} = require("../businesslogic/hostelowners");
const {loginValidation} = require("../middlewares/middleware");

route.post("/hostelowner_login",loginValidation,async(req,res)=>{
    checkinghostelIsPreseent(req.body.username,req.body.password)
})

module.exports = route;