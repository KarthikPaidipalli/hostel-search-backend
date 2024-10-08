const {DataTypes} = require("sequelize");
const sequilze = require("../db");

const ownersinfo = sequilze.define("ownersinfo",{
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    owner_first_name:{
        type: DataTypes.STRING(50)
    },
    owner_last_name:{
        type: DataTypes.STRING(50)
    },
    contact_num:{
        type:DataTypes.STRING(10)
    },
    adress:{
        type:DataTypes.STRING(90)
    },
    mail:{
        type:DataTypes.STRING(50)
    },
    owner_type: {  
        type: DataTypes.ENUM("individual", "company", "group"),
        defaultValue: "individual"
    },
    registration_date: { 
        type: DataTypes.DATE,
    },
},{
    tableName: "owner_infromation_tbl"
})

module.exports = ownersinfo;