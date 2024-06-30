import mongoose from "mongoose"

export const dbConnection = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/e-commerce")
    .then(()=>console.log("DB Connected"))
    .catch((error)=>{
                     console.log(error)
                                       })
}