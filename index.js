const express = require("express");
const app = express();
const dbconnection = require("./db");
app.use(express.json());

dbconnection.sync(({force:true})).then(()=>{
    console.log("synced with database")
}).catch((err)=>{
    console.log(err)
});

app.get("/", (req, res) => {
    res.send("hi")
})

app.listen("4000")