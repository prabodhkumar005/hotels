const mongoose=require('mongoose');
const MenuItemSchemma=new mongoose.Schema({
        name:{
            type:String,
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        is_drink:{
            type:Boolean,
            default:false
        },
        num_sales:{
            type:Number,
            default:false
        }
})

const MenuItem=mongoose.model('MenuItem',MenuItemSchemma)
module.exports=MenuItem;