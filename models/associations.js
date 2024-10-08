const customers = require("./customers");
const customersInformation = require("./customersInfo");
const ownersinfo = require("./ownersinfo");

const db={}
db.customers = customers;
db.customersInformation = customersInformation;
db.ownersinfo = ownersinfo;

module.exports = db;
