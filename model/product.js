const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    brand:{
        type:String
    },
    stock:{
        type:String
    },
    image:{
        type:String
    },
    description:{
        type:String
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'User'
    }
})

const Product=mongoose.model('Product',productSchema);
module.exports={Product};