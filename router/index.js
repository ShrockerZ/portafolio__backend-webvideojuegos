const express= require('express');
const router= express.Router();

router.get('/',(req,res)=>{
    res.send("Aplicacion corriendo correctamente");
})


module.exports=router;