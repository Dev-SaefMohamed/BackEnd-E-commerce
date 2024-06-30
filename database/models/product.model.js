import mongoose from "mongoose";

let productSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        min:[10,"too short product name"]
    },
    slug:{
        type:String,
        lowercase:true
    },
    price:{
        type:Number,
        required:true,
        default:0,
        min:0
    },
    priceAfterDiscount:{
        type:Number,
        default:0,
        min:0
    },
    description:{
        type:String,
        min:[10,"too short description"],
        max:[500,"too long description"],
        required:true,
        trim:true,
    },
    stock:{
        type:Number,
        default:0,
        min:0
    },
    sold:{
        type:Number,
        default:0,
        min:0
    },
    imgCover:{
        type:String,
        //required:true
    },
    images:{
        type:[String],
    },   
    category:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"category",
        required:true
    },
    subCategory:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"subCategory",
        required:true   
    },
    brand:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"brand",
        required:true   
    },
    ratingAvg:{
        type:Number,
        min:1,
        max:5
    },
    ratingCount:{
        type:Number,
        min:0,
    }
},{timestamps:true})

export const productModel = mongoose.model("product",productSchema)