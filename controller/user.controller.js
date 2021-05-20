const User= require('../models/User');

exports.getUser=async (req,res)=>{
    const user= req.user;
    try {
        const result= await User.findOne({user});
        const data={
            user:result.user,
            name:result.name,
            phrase:result.phrase,
            email:result.email,
            owned:result.owned,
            wishlist:result.wishlist,
        }
        return res.status(200).json({data});
    } catch (error) {
        return res.status(400).json({error:'error en servidor'})
    }

}   
exports.updateUser=async (req,res)=>{
    const user= req.user;
    const {phrase,name,email} = req.body
    try {
        const currentUser= await User.findOne({user});
        if(phrase)  currentUser.phrase=phrase;
        if(name)    currentUser.name=name;
        if(email)   currentUser.email=email;
        const result=await currentUser.save();
        return res.status(200).json({error:null});
    } catch (error) {
        return res.status(400).json({error:'error en servidor'})
    }
}   
exports.addGames=async (req,res)=>{
    const user= req.user;
    const game=req.body;
    try {
        const currentUser= await User.findOne({user});
        const exist=currentUser.owned.find(item=>item.id===game.id);
        if(exist) return res.status(400).json({error:"juego ya agregado"});
        currentUser.owned=[...currentUser.owned,game];
        const result=await currentUser.save();
        return res.status(200).json({error:null});
    } catch (error) {
        return res.status(400).json({error:'error en servidor'})
    }



}   

exports.addWishList=async (req,res)=>{
    const user= req.user;
    const game=req.body;
    try {
        const currentUser= await User.findOne({user});
        const exist=currentUser.wishlist.find(item=>item.id===game.id);
        if(exist) return res.status(400).json({error:"juego ya agregado"});
        currentUser.wishlist=[...currentUser.wishlist,game];
        const result=await currentUser.save();
        return res.status(200).json({error:null});
    } catch (error) {
        return res.status(400).json({error:'error en servidor'})
    }

}   
exports.removeGames=async (req,res)=>{
    const user= req.user;
    const gameId=req.params.id;
    try {
        const currentUser= await User.findOne({user});
        currentUser.owned=currentUser.owned.filter(item=>item.id!==parseInt(gameId));
        await currentUser.save();
        return res.status(200).json({error:null});
    } catch (error) {
        return res.status(400).json({error:'error en servidor'})
    }

}   
exports.removeWishList=async (req,res)=>{
    const user= req.user;
    const gameId=req.params.id;
    try {
        const currentUser= await User.findOne({user});
        currentUser.wishlist=currentUser.wishlist.filter(item=>item.id!==parseInt(gameId));
        await currentUser.save();
        return res.status(200).json({error:null});
    } catch (error) {
        return res.status(400).json({error:'error en servidor'})
    }
}   