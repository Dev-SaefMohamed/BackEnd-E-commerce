import {subCategoryModel} from "../../../database/models/subCategory.model.js"
import { catchError } from "../../catchError/catchError.js";
import slugify from "slugify";
import { deleteOne } from "../../handel/factory.handel.js";
////////////////////////////////////////////////////////////////////////////////////////////////////////
const addSubCategory = catchError(async(req,res,next) => {

      const {name} = req.body

      req.body.slug = slugify(name)
    
     //const subCategory = new subCategoryModel ({category,name, slug:slugify(name)})
    
      const subCategory = new subCategoryModel(req.body)
    
      await subCategory.save()

      res.status(202).json({message: 'success',subCategory})

})
////////////////////////////////////////////////////////////////////////////////////////////////////////
const getAllSubCategory = catchError(async(req,res,next) => {
    
    let filter = {}

    if(req.params.categoryId){

        filter = {category:req.params.categoryId}

    }

    let subCategory = await subCategoryModel.find(filter)
    
    res.status(201).json({message: 'success',subCategory})

})
////////////////////////////////////////////////////////////////////////////////////////////////////////
const getOneSubCategory = catchError(async(req,res,next) => {
    
    let {id} = req.params

    let subCategory = await subCategoryModel.findById(id)

    res.status(201).json({message: 'success',subCategory})

})
////////////////////////////////////////////////////////////////////////////////////////////////////////
const updateSubCategory = catchError(async(req,res,next) => {

    let {id} = req.params

    const {name} = req.body

    let subCategory = await subCategoryModel.findByIdAndUpdate(id, {name, slug:slugify(name)},{new:true})
    
    await subCategory.save()

    res.status(203).json({message: 'success',subCategory})

})
////////////////////////////////////////////////////////////////////////////////////////////////////////

const deleteSubCategory = deleteOne(subCategoryModel)

////////////////////////////////////////
// 200 => success(OK)
// 300 => redirection
// 400 => client side error
// 500 => internal server error

export{
    addSubCategory, 
    deleteSubCategory,
    getAllSubCategory,
    getOneSubCategory, 
    updateSubCategory 
}