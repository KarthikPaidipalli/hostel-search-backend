const express = require("express");
const app = express();
const dbconnection = require("./db");
const customers = require("./controllers/customers");
const hostelOwners = require("./controllers/hostelownsers")
dbconnection.sync(({force:true})).then(()=>{
    console.log("synced with database")
}).catch((err)=>{
    console.log(err)
});

app.use(express.json());
app.use("/customers",customers);
app.use("/hostelowners",hostelOwners);

app.get("/", (req, res) => {
    res.send("hi")
})

app.listen("4000")