import {categoryModel} from "../../../database/models/category.model.js"
import { catchError } from "../../catchError/catchError.js";
import slugify from "slugify";
import { deleteOne } from "../../handel/factory.handel.js";
////////////////////////////////////////////////////////////////////////////////////////////////////////
const addCategory = catchError(async(req,res,next) => {

    const {name} = req.body

    const category = new categoryModel ({name, slug:slugify(name)})
    
    await category.save()

    res.status(202).json({message: 'success'})

})
////////////////////////////////////////////////////////////////////////////////////////////////////////
const getAllCategory = catchError(async(req,res,next) => {
    
    let category = await categoryModel.find()

    res.status(201).json({message: 'success',category})

})
////////////////////////////////////////////////////////////////////////////////////////////////////////
const getOneCategory = catchError(async(req,res,next) => {
    
    let {id} = req.params

    let category = await categoryModel.findById(id)

    res.status(201).json({message: 'success',category})

})
////////////////////////////////////////////////////////////////////////////////////////////////////////
const updateCategory = catchError(async(req,res,next) => {

    let {id} = req.params

    const {name} = req.body

    let category = await categoryModel.findByIdAndUpdate(id, {name, slug:slugify(name)},{new:true})
    
    await category.save()

    res.status(203).json({message: 'success',category})

})
////////////////////////////////////////////////////////////////////////////////////////////////////////
const deleteCategory = deleteOne(categoryModel)
////////////////////////////////////////////////////////////////////////////////////////////////////////
// 200 => success(OK)
// 300 => redirection
// 400 => client side error
// 500 => internal server error
export{
    addCategory,
    getAllCategory,
    getOneCategory,
    updateCategory,
    deleteCategory
}