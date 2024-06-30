import { catchError } from "../../catchError/catchError.js";
import slugify from "slugify";
import { deleteOne } from "../../handel/factory.handel.js";
import { brandModel } from "../../../database/models/brand.model.js";
////////////////////////////////////////////////////////////////////////////////////////////////////////
const addBrand = catchError(async(req,res,next) => {

    const {name} = req.body

    const brand = new brandModel ({name, slug:slugify(name)})
    
    await brand.save()

    res.status(202).json({message: 'success'})

})
////////////////////////////////////////////////////////////////////////////////////////////////////////
const getAllBrand = catchError(async(req,res,next) => {
    
    let brand = await brandModel.find()

    res.status(201).json({message: 'success',brand})

})
////////////////////////////////////////////////////////////////////////////////////////////////////////
const updateBrand = catchError(async(req,res,next) => {

    let {id} = req.params

    const {name} = req.body

    let brand = await brandModel.findByIdAndUpdate(id, {name, slug:slugify(name)},{new:true})
    
    await brand.save()

    res.status(203).json({message: 'success',category})

})
////////////////////////////////////////////////////////////////////////////////////////////////////////
const deleteBrand = deleteOne(brandModel)
////////////////////////////////////////////////////////////////////////////////////////////////////////
// 200 => success(OK)
// 300 => redirection
// 400 => client side error
// 500 => internal server error
export{
    addBrand, 
    deleteBrand, 
    getAllBrand, 
    updateBrand
}