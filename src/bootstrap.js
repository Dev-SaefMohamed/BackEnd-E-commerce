import { brandRouter } from "./modules/brand/brand.route.js"
import { categoryRouter } from "./modules/category/category.route.js"
import { productRouter } from "./modules/product/product.route.js"
import { subCategoryRouter } from "./modules/subCategory/subCategory.route.js"

export const bootstrap = (app) => {

//////////////////////////////////////////////
app.use("/api/category",categoryRouter)
//////////////////////////////////////////////
app.use("/api/subCategory",subCategoryRouter)
//////////////////////////////////////////////
app.use("/api/brand",brandRouter)
//////////////////////////////////////////////
app.use("/api/product",productRouter)
//////////////////////////////////////////////

// => server url (end point) error handling
app.use("*",(req,res,next) => {
   res.status(404)
      .json({message:`Not Found End Point${req.originalUrl}`})
})
// => send the error message
app.use((error,req,res,next)=>{
    //let error = error.message;
    res.status(error.status ||500)
       //=> we use (stack) to find error location
       .json({error, stack:error.stack})
}) 

app.get('/', (req, res) => res.send('Hello World!'))

}