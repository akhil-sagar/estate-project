import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

const signup = async (req,res)=>{
    const {username ,email ,password}=req.body;
    const hashedpassword=bcryptjs.hashSync(password,10)
    const newUser=new User({username ,email ,password:hashedpassword});
    try{
        await newUser.save()
        res.status(201).json("User created succesfully");
    }catch(err){
        res.status(500).json(err)
    }
};


export default signup;
