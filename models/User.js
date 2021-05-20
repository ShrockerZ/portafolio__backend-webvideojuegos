const mongoose= require('mongoose');
const userSchema=new  mongoose.Schema({
    user:{
        type:String,
        required:'Nombre de usuario obligatorio',
        trim:true
    },
    password:{
        type:String,
        required:'Debe ingresar una contraseña'
    },
    name:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
    phrase:{
        type:String,
    },
    // games
    owned:[{
        id:Number,
        name:String,
        slug:String,
        background_image:String,
        metacritic:Number,
    }],
    wishlist:[{
        id:Number,
        name:String,
        slug:String,
        background_image:String,
        metacritic:Number,
    }]
});

module.exports= mongoose.model('User',userSchema);