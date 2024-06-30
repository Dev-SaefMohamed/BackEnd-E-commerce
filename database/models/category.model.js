import mongoose from "mongoose";

let categorySchema = mongoose.Schema({
    name:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        minlength:[3,"too short category name"]
    },
    image:{
        type:String,
        //required:true
    },
    slug:{
        type:String,
        lowercase:true
    }
},{timestamps:true})

export const categoryModel = mongoose.model("category",categorySchema)