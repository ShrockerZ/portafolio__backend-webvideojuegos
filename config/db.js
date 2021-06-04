const enviroment=   require('../enviroment')
const mongoose=     require('mongoose');

mongoose.connect(process.env.DATABASE,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{console.log("success connect database")})
    .catch((error)=>{console.log("error connect database",error)})

mongoose.connection.on('error',error=>{
    console.log("error connect database",error)
});

// modelos
require('../models/User');
module.exports=mongoose