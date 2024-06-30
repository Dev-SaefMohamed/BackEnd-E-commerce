import mongoose from "mongoose";

let subCategory = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    slug:{
        type:String,
        lowercase:true
    },
    category:{
         type:mongoose.SchemaTypes.ObjectId,
         ref:"category"
    }
},{timestamps:true})

export const subCategoryModel = mongoose.model("subCategory",subCategory)