import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';


dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("connected to MongoDb")
}).catch((err)=>{
    console.log(err);
})

const app=express();
app.use(bodyParser.urlencoded())

app.use(bodyParser.json())

app.use(express.json());

app.use('/api/user',userRouter);

app.use('/api/auth',authRouter);

app.listen(3000,()=>{
    console.log("server is running at port 3000");
})