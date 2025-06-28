import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    usename : {
        type : string,
        required :  true,
        unique : true,
    },
    email : {
        type:string,
        required: true,
        unique:true,
    },
    password : {
        type:string,
        required: true,
    }
},{timestapes:true});

const User=mongoose.model('User',userSchema)

export default User;