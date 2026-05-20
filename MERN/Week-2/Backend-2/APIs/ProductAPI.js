//Create mini-express app (Seprate Route)
import exp from "express";
export const productApp=exp.Router();

let product=[]

/*Create product API with below Operations 
    Create new Product ({productID, name, brand, price})
    Read all products
    Read all product by brand
    Update a Product
    Delete a Product */

productApp.post('/product', (req, res)=>{
    //get user data from client
    const newProduct = req.body //to get data sent from the client
    //push newproduct in the product
    product.push(newProduct)
    res.json({message:"Product Added"})
})

productApp.get('/product/:B', (req, res)=>{
    //first take the brand string 
    let brand = req.params.B
    let result=[]
    for(let object of product){
        if(object.brand===brand){
            result.push(object)
        }
    }
    if(result.length===0){
        return res.json({message:"No Products Found with such Brand"})
    }
    res.json({message:"Products Found Below", payload:result})
})

productApp.get('/product',(req, res)=>{
    //Read all the products in the temp local mem
    res.json({message:"All Products Data Below", payload:product})
})

productApp.put('/product', (req, res)=>{
    //get the updated product from the client{}
    let modProd=req.body
    //get Index of the existing product which is to be updated
    let ind = product.findIndex(obj=>obj.productID===modProd.productID)
    if(ind===-1){
        return res.json({message:"Product not Found to be Updated"})
    }
    //now update the existing data with the use of index
    product.splice(ind,1,modProd)
    res.json({message:"Updated Succesfully"})
})

productApp.delete('/product/:id', (req, res)=>{
    //first take the id from the url parameter which is a string and convert to number
    let idDel = Number(req.params.id)
    let ind = product.findIndex(obj=>obj.productID===idDel)
    if(ind===-1){
        return res.json({message:"Product Not Found"})
    }
    product.splice(ind,1)
    res.json({message:"Product Deleted"})
})