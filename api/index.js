const express=require('express');
const app=express();
const path=require('path');
var cors = require('cors');
const PORT=5000;
app.use(cors());
/*
app.use(function(req,res,next){
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET');
})*/
//serving static files
app.use(express.static('/public'));
app.use(express.json());
// import routes
require('./routes')(app);

app.listen(PORT,()=>{
    console.log("server is running :"+PORT)
})