import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import cookieParser from 'cookie-parser';
import listingRouter from './routes/listing.route.js';
import path from 'path';


dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to MongoDb")
}).catch((err)=>{
    console.log(err);
})

const __dirname = path.resolve();

const app=express();

app.use(bodyParser.urlencoded())

app.use(bodyParser.json())

app.use(express.json());

app.use(cookieParser());

app.use('/api/user',userRouter);

app.use('/api/auth',authRouter);

app.use('/api/listing',listingRouter)

app.use(express.static(path.join(__dirname,'/client/dist')));



app.use((err ,req ,res ,next)=>{
    const statusCode=err.statusCode || 500;
    const message=err.message || "Internal server error !";
    return res.status(500).json({
        success: false,
        statusCode,
        message,
    });
})

app.listen(3000,()=>{
    console.log("server is running at port 3000");
})