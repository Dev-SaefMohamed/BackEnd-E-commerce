import { productModel } from "../../../database/models/product.model.js";
import { catchError } from "../../catchError/catchError.js";
import slugify from "slugify";
import { deleteOne } from "../../handel/factory.handel.js";
////////////////////////////////////////////////////////////////////////////////////////////////////////
const addProduct = catchError(async(req,res,next) => {

      const {title} = req.body

      req.body.slug = slugify(title)
    
      const product = new productModel(req.body)
    
      await product.save()

      res.status(202).json({message: 'success'})

})
////////////////////////////////////////////////////////////////////////////////////////////////////////
const getAllProduct = catchError(async(req,res,next) => {
    
    let product = await productModel.find()

    res.status(201).json({message: 'success',product})

})
////////////////////////////////////////////////////////////////////////////////////////////////////////
const updateProduct = catchError(async(req,res,next) => {

    let {id} = req.params

    const {title} = req.body

    req.body.slug = slugify(title)

    // thats the DEV:said code                                                    
    //let product = await productModel.findByIdAndUpdate(id, {title, slug:slugify(title)},{new:true})
    
    //that's my code
    let product = await productModel.findByIdAndUpdate(id, req.body,{new:true})

    await product.save()

    res.status(203).json({message: 'success',product})

})
////////////////////////////////////////////////////////////////////////////////////////////////////////

const deleteProduct = deleteOne(productModel)

////////////////////////////////////////
// 200 => success(OK)
// 300 => redirection
// 400 => client side error
// 500 => internal server error

export{
    addProduct, 
    deleteProduct, 
    getAllProduct, 
    updateProduct
}