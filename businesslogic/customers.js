const db = require("../models/associations");
const errormsg = require("../errorconstants");
const bcrypt = require("bcrypt");
const jsontoken = require("jsonwebtoken");

async function checkingCustomerIsPreseent(username, password) {

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

module.exports = checkingCustomerIsPreseent;
