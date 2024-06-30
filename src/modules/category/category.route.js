import  express, { application }  from "express";
import { addCategory, deleteCategory, getAllCategory, getOneCategory, updateCategory } from "./category.controller.js";
import { subCategoryRouter } from "../subCategory/subCategory.route.js"; 
import { validate } from "../../validation/validate.js";
import { addCategoryValidation, deleteCategoryValidation, updateCategoryValidation } from "./category.validation.js";

let categoryRouter = express.Router()
//
categoryRouter.use("/:categoryId/subCategory",subCategoryRouter)

categoryRouter.post("/",validate(addCategoryValidation),addCategory)

categoryRouter.get("/",getAllCategory)

categoryRouter.get("/:id",getOneCategory)

categoryRouter.put("/:id",validate(updateCategoryValidation),updateCategory)

categoryRouter.delete("/:id",validate(deleteCategoryValidation),deleteCategory)

export{
    categoryRouter
}