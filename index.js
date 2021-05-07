const express = require('express');
const router=require('./router');
const app= express();
const chalk=require('chalk');
// enviroment
require('./enviroment'); 
const port= process.env.PORT || 3000;
// database

// middleware
app.use(express.json());

// rutas
app.use('/',router)


// listen
app.listen(port,()=>{
    console.log(`server runnig port--${port}`)
});