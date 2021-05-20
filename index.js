// const /var
const express =         require('express');
const app=              express();
const chalk=            require('chalk');
const authRouter=       require('./router/auth.router')
const userRouter=       require('./router/user.router')
const db=               require('./config/db');
const enviroment=       require('./enviroment');
 
const port= process.env.PORT || 3000;
// database

// middleware
app.use(express.json());

// routes
app.use('/auth',authRouter);
app.use('/user',userRouter);

// listen
app.listen(port,()=>{
    console.log(`server runnig port--${port}`)
});