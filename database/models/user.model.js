import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        unique:true,
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        unique:true,
        required:true,
        trim:true
    },
    role:{
        type:String,
        enum:['admin','user']
    },
    isActive:{
        type:Boolean,
        default:true
    },
    verified:{
        type:Boolean,
        default:false
    },
    blocked:{
        type:Boolean,
        default:false
    }
})
export const userModel = mongoose.model("user",userSchema)