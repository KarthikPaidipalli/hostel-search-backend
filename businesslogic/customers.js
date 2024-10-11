const db = require("../models/associations");
const errormsg = require("../errorconstants");
const bcrypt = require("bcrypt");
const jsontoken = require("jsonwebtoken");

async function checkingCustomerIsPreseent(username, password) {
    console.log("user",username);
    const customersDetails = await db.customers.findOne({
        where: {
            username: username
        }
    });

    if (!customersDetails) {
        throw new Error(errormsg.NO_USER_PRESENT);
    }

    const passwordMatch = await bcrypt.compare(password, customersDetails.password);

    if (!passwordMatch) {
        throw new Error(errormsg.PASSWORD_MISMATCH);
    }

    const token = jsontoken.sign({ username }, "auth123", { expiresIn: "30d" }); 
    
    customersDetails.token = token;

    await customersDetails.save();

    return token;
}

async function customerSignup(obj){

    const hasedpPassword = await bcrypt.hash(obj.password,10);
    obj.password=hasedpPassword;
    const customerFullDetails = await db.customersInformation.create(obj);
    if(!customerFullDetails){
        throw new Error(errormsg.UNABLE_TO_CREATE_CUSTOMER)
    }

    const customerdetails = await db.customers.create({username:obj.username,password:hasedpPassword});

    if(!customerdetails){
        throw new Error(errormsg.UNABLE_TO_INSERT_INTO_CUSTOMER)
    }
}

module.exports = { checkingCustomerIsPreseent,customerSignup };
