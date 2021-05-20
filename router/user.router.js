const express=require('express');
const { addGames,
        getUser,
        updateUser, 
        removeGames, 
        addWishList, 
        removeWishList } = require('../controller/user.controller');
const { authJWT } = require('../middleware/auth.middleware');

const router=express.Router();
router.get('/',authJWT,getUser)
router.put('/',authJWT,updateUser)
router.post('/owned',authJWT,addGames)
router.delete('/owned/:id',authJWT,removeGames)
router.post('/wishlist',authJWT,addWishList)
router.delete('/wishlist/:id',authJWT,removeWishList)


module.exports=router;
