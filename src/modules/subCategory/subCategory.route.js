import  express  from "express";
import { addSubCategory, deleteSubCategory, getAllSubCategory, getOneSubCategory, updateSubCategory } from "./subCategory.controller.js";

let subCategoryRouter = express.Router({mergeParams:true})

subCategoryRouter.post("/",addSubCategory)

subCategoryRouter.get("/",getAllSubCategory)

subCategoryRouter.get("/:id",getOneSubCategory)

subCategoryRouter.put("/:id",updateSubCategory)

subCategoryRouter.delete("/:id",deleteSubCategory)

export{
    subCategoryRouter
}