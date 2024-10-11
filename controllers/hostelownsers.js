const express = require('express');
const route = express.Router();
const {checkinghostelIsPreseent} = require("../businesslogic/hostelowners")
route.post("/addHostelOwnersInfo",async(req,res)=>{
    checkinghostelIsPreseent(req.body.username,req.body.password)
})

module.exports = route;