
const mongoose=require("mongoose")

const productSchema = mongoose.Schema({
    category:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    brand:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    mrp:{
        type:Number,
        required:true
    },
    discount:{
        type:Number,
        required:true
    },
    userId : {
        type : String,
    }
},{
    
    versionKey:false,
})

const ProductModel = mongoose.model("product",productSchema)

module.exports={ProductModel}