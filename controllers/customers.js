const express = require('express');
const route = express.Router();  // Correct way to use router
const {validateLogin} =  require("../middlewares/middleware")

route.post('/login', validateLogin,(req, res) => {
    try{
        res.send("hi")
    }
    catch(err){
        return res.status(500).send("Something went wrong")
    }
});

module.exports = route