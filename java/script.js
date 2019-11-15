const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

let tables = [];
let waitList = [];

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../home.html"));
});

app.get("/tables", function(req, res){
    res.sendFile(path.join(__dirname, "../tables.html"));
});

app.get("/reserve", function(req, res){
    res.sendFile(path.join(__dirname, "../reserve.html"));
});

app.get("/api/tables", function(req, res){
    return res.json(tables);
});

app.get("/api/reserve", function(req, res){
    return res.json(waitList);
});

app.post("/api/tables",function(req, res){
    const newTable = req.body;
    console.log(newTable);
    if (tables.length < 5) {
        tables.push(newTable);
    } else {
        console.log("tables are full");
        waitList.push(newTable);
    }
    res.json(newTable);
});

app.listen(PORT, function(){
    console.log("server is listening on Port: " + PORT);
});