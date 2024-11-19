const mongoose=require('mongoose');
const mongoURL='mongodb://127.0.0.1:27017/hotel'
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