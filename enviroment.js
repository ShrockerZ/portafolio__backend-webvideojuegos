const path =require('path');
require('dotenv').config({
    path:path.resolve(__dirname,process.env.ENVO+'.env')
});


module.exports ={
    ENVO:process.env.ENVO || 'development'
}