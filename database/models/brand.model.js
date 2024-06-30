import mongoose from "mongoose";

let brandSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    slug:{
        type:String,
        lowercase:true
    },
    logo:{
        type:String,
        //required:true
    }
},{timestamps:true})

export const brandModel = mongoose.model("brand",brandSchema)