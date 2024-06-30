import e from "express";


export const validate = (schema) => {

    return (req,res,next) => {

       let {error} = schema.validate({...req.body, ...req.params, ...req.query},
                                     {abortEarly:false});
    

        let errorStyle = [];

       if(error?.details){

        error.details.forEach((e) => errorStyle.push({message:e.message, path:e.path[0]}))

           res.json(errorStyle);      

       }

       else{
       
           next();

       }
    
    }

}