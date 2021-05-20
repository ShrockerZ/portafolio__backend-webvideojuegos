const jwt= require('jsonwebtoken');

exports.authJWT=(req,res,next)=>{
    const token= req.header('x-auth-token');
    if(!token) return res.status(401).send({error:'No se ha enviado token '})
    try {
        const decodify= jwt.verify(token,process.env.SECRETO);
        req.user=decodify.user;
    } catch (error) {
        return res.status(401).send({error:"token invalido "})
    }
    next();
}