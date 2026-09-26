const express=require("express");
const router=express.Router();
const userModel=require("../models/user-model");
router.get("/",function(req,res){
    res.send("hey its working");
});
router.post("/register",async function(req,res){
    let{email,password,fullname}=req.body;

    let user=await userModel.create({
        email,
        password,
        fullname
    });
});

module.exports=router;