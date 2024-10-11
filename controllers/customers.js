const express = require('express');
const route = express.Router();  // Correct way to use router
const { loginValidation,signupValidation } =  require("../middlewares/middleware")
const {customerSignup,checkingCustomerIsPreseent } = require("../businesslogic/customers")
route.post('/signin', loginValidation,async(req, res) => {
    try{
        const token = await checkingCustomerIsPreseent(req.body.username,req.body.password);
        return res.status(200).send({token});
    }
    catch(err){
        return res.status(500).send(err.message);
    }
});

route.post("/signup",signupValidation,async(req,res)=>{
    try{
        await customerSignup(req.body);
        return res.status(200).send({msg:"successfully signedup"})
    }
    catch(err){
        return res.status(500).send("Something went wrong");
    }
})

module.exports = route