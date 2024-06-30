import  express  from "express";
import { addBrand, deleteBrand, getAllBrand, updateBrand } from "./brand.controller.js";

let brandRouter = express.Router()

brandRouter.post("/",addBrand)

brandRouter.get("/",getAllBrand)

brandRouter.put("/:id",updateBrand)

brandRouter.delete("/:id",deleteBrand)

export{
    brandRouter,
}