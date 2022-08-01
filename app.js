const { response } = require("express");
const express=require("express");

const app=express();

app.use("/static", express.static('./static/'));

app.get("/", function(req,res){
  res.sendFile(__dirname + "/index.html");
});

app.get("/about", function(req,res){
  res.sendFile(__dirname + "/about.html");
});
app.get("/service", function(req,res){
  res.sendFile(__dirname + "/service.html");
});




app.listen("3000", function(){
  console.log("Server started at port 3000");
});
