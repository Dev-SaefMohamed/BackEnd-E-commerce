import  express  from "express";
import { addProduct, deleteProduct, getAllProduct, updateProduct } from "./product.controller.js";

let productRouter = express.Router()

productRouter.post("/",addProduct)

productRouter.get("/",getAllProduct)

productRouter.put("/:id",updateProduct)

productRouter.delete("/:id",deleteProduct)

export{
    productRouter
}