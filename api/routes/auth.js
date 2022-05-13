const router = require("express").Router();
const User = require("../models/User");

//REGISTER
router.post("/register",async (req,res) => {
    const newUser = new User({
        username:req.body.username,
        email:req.body.username,
        password:req.body.username 
    });
    try{

    const user = await newUSer.save();
    res.status(201).json(user);
    }catch(err){
        res.status(500).json(err);
    }

});


module.exports =router;