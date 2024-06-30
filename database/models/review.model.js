import mongoose from "mongoose";

let reviewSchema = mongoose.Schema({
    rate:{
        type:Number,
        enum:[1,2,3,4,5]
    },
    product:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"product",
        required:true
    },
    text:{
        type:String,
        required:true,
        trim:true
    },
    user:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"user"
    }
},{timestamps:true})
export const reviewModel = mongoose.model("review",reviewSchema)