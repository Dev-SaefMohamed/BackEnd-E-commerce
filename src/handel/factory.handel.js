import { catchError } from "../catchError/catchError.js"

///////////////////////////////////////////////
// => important (((((DON'T REPEAT YOURSELF)))))
///////////////////////////////////////////////

export const deleteOne = (model) => {
    return ( catchError(async(req,res,next) => {
    
        let {id} = req.params
    
        let category = await model.findByIdAndDelete(id)
        
        if(!category){
            res.status(404).json({message:"category not found"})
        }
    
        else{
             res.status(201).json({message: 'success'})
        }
    
    }))
}