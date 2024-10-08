const {DataTypes} = require("sequelize");
const sequilze = require("../db");

const customers = sequilze.define("customers",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING(45)
    },
    password:{
        type: DataTypes.STRING(250)
    },
    token:{
        type: DataTypes.STRING(250)
    }
},
{
    tableName: "customers_tbl"
})

module.exports = customers;