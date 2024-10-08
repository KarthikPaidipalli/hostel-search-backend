const {DataTypes} = require("sequelize");
const sequilze = require("../db")

const customersinfo = sequilze.define("customersinfo",{
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    first_name:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    last_name:{
        type: DataTypes.STRING(50)
    },
    phone_num:{
        type: DataTypes.STRING(10),
        allowNull: false
    },
    email:{
        type: DataTypes.STRING(45),
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM("male", "female")
    },
    adress:{
        type: DataTypes.STRING(100)
    },
    date_of_birth:{
        type: DataTypes.DATE
    },
    password:{
        type: DataTypes.STRING(250),
        allowNull: false
    }
},{
    tableName: "customers_infromation_tbl"
})

module.exports = customersinfo