/* 2. REST API with below operations
        a. Create product
        b. Read all products
        c. Read a product by productId
        d. Update a product by productId
        e. Delete a product by productId */

import exp from "express"
import {prodModel} from "../models/ProductModel.js"

export const prodApp=exp.Router()

prodApp.post("/products", async(req, res)=>{
    const newProd = req.body;
    //Create new product document in databad using ProductModel
    const newProdDoc = new prodModel(newProd)
    const result = await newProdDoc.save()
    console.log("New Product Added", result)
    res.status(201).json({message:"Product Added Succesfully"})
})

prodApp.get("/products", async(req, res)=>{
    let prodList = await prodModel.find()
    res.status(200).json({message:"All Product Details Below", Products:prodList})
})

prodApp.get("/products/:id", async(req, res)=>{
    let uid = req.params.id
    //find
    let result = await prodModel.findOne({productID:uid})
    if(!result){
        return res.status(404).json({message: "Product Not Found"})
    } res.status(200).json({message:"Found", Product:result})
})

prodApp.put("/products/:id", async(req, res)=>{
    const modProd = req.body;
    const pid = req.params.id;
    let result = await prodModel.findOneAndUpdate({productID:pid}, {$set:{...modProd}}, {new:true, runValidators:true})
    if(!pid){
        return res.status(404).json({message: "Product Not Found"})
    } res.status(200).json({message:"Updated Product", UpdatedProduct:result})
})


prodApp.delete("/products/:id", async(req, res)=>{
    const pid = req.params.id;
    let result = await prodModel.findOneAndDelete({productID:pid})
    if(!result){
        return res.status(404).json({message: "Product Not Found"})
    } res.status(200).json({message:"Deleted Product", DeletedProduct:result})
})





//write a detailed para too about the above code in 100 words
//The above code defines a RESTful API for managing products using Express.js and Mongoose. 
// It includes routes for creating, reading, updating, and deleting products. 
// The `prodApp` router handles HTTP requests related to products.
// 