const {Sequelize, Model} = require("sequelize");

const connection = new Sequelize("hostelsearch", "root", "root123", {
    host:"localhost",
    dialect:"mysql"
})

try{
    connection.authenticate();
    console.log("connected to sql database")
}
catch(err){
    console.log(err)
}

module.exports = connection;