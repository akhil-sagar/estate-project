import errorHandler from "./error.js";
import jwt from "jsonwebtoken";

 export const verifyToken=(req,res,next)=>{
   const token=req.cookie.access_token;
   if (!token){
    return next(errorHandler(401,'unAuthorized'))
    }
    jwt.verify(token,process.env.JWT_secret,(err,user)=>{
     if (err) return next(errorHandler(403,'Forbidden'));
     req.user=user
     next();

   
    });
   
}