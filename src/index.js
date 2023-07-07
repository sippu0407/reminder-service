const express=require('express');
const bodyParser=require('body-parser');
const morgan =require('morgan');




const {PORT} = require('./config/serverConfig');
const sendBasicEmail=require('./services/email-services');

// console.log(PORT);

function startServer(){

    const app=express();

  app.listen(PORT,(req,res)=>{
    //setup body-parser

    app.use(morgan);
 
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));

    
    console.log(`listioning at ${PORT}`);
  })
}

startServer();