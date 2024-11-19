const mongoose=require('mongoose');
require('dotenv').config();
//const mongoURL=process.env.MONGODB_URL_LOCAL
const mongoURL=process.env.MONGODB_URL;
mongoose.connect(mongoURL)

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected to mongodb server')
})

db.on('error',(err)=>{
    console.error('mongodb connection error',err)
})

db.on('disconnected',()=>{
    console.log('mongodb disconnected')
})