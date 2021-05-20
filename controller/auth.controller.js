const jwt= require('jsonwebtoken');
const User= require('../models/User');
const bcrypt= require('bcryptjs');

exports.Register=async (req,res)=>{
    const {user,password}= req.body;
    if (user==="" || password==="") return res.json({error:'Todos los campos son obligatorios'});
    try {
        const exist=await  User.findOne({user});
        if(exist) return res.json({error:'Usuario ya existe utilize otro'});
        const salt= await bcrypt.genSaltSync(10);
        const newUser={user,password};
        newUser.password=await bcrypt.hashSync(newUser.password,salt);
        const result=await User.create(newUser);
        return res.status(200).json(result);
    } catch (error) {
        console.log(error);
        return res.status(400).json({error:'Error en el servidor -Register'});
    }
}
exports.Login=async (req,res)=>{
    const {user,password}= req.body;
    try {
        const exist=await  User.findOne({user});
        if(!exist) res.json({error:'Usuario no existe'});
        const passCorrect= await bcrypt.compareSync(password,exist.password);
        if(!passCorrect) return res.json({error:'Contraseña incorrecta'});
        const payload={
            user:exist.user,
        }
        jwt.sign(payload,process.env.SECRETO,{expiresIn:3600},
            (error,token)=>{
                if(error) throw error;
                return res.status(200).json({token})
            })

    } catch (error) {
        return res.status(400).json({error:'Error en el servidor -Login'})
    }
}



