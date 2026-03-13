//create min-express app(Seperate route)
import exp from "express"
import {UserModel} from "../models/UserModel.js"
import {hash, compare} from "bcryptjs"
import jwt from "jsonwebtoken"
import { config } from "dotenv"
import { verifyToken } from "../middlewares/verifyToken.js"
const {sign}=jwt //destructuring to get sign function from jwt as it is a default export which do not follow ES6 module system, so we need to destructure to get the sign function
//verify function to verify the token
//sign function to create token
export const userApp=exp.Router()

//define user REST API routes
    //User Login
userApp.post('/auth', async(req, res)=>{
    //get user credentials obj from client
    const {email, password} = req.body;
    //verify email
    const emailV = await UserModel.findOne({email:email})
    if(!emailV){
        return res.status(400).json({message:"Invalid Email"})
    }
    //verify password
    let result = await compare(password, emailV.password)
    if(!result){
        return res.status(400).json({message:"Invalid Password"})
    }
    //if passwords are matches, send success response
    //create a token
    const signedToken = sign({email:emailV.email}, process.env.SECRET_KEY, {expiresIn:30})
    //xss attack can be prevented by storing token in httpOnly cookie as it cannot be accessed by client side scripts, 
    //so even if attacker get the token, they cannot use it as it is httpOnly cookie
    //csrf attack can be prevented by setting sameSite attribute of cookie to "strict" or "lax", 
    //so that cookie will not be sent in cross site requests, and attacker cannot use the token in their malicious requests
    //store token as httpOnly cookie in client
    res.cookie("token", signedToken, {
        httpOnly:true,
        sameSite:"lax", //relaxed restricitions, cookie will be sent in top level navigation and GET request initiated by third party website, 
        //but not in POST request or AJAX request initiated by third party website
        secure:false //set to true in production when using https, so that cookie will be sent only over secure connections
    }) //send token in response
    res.status(200).json({message:"Login Success", payload:{email:emailV.email, username:emailV.username}})
})

    //Create new User
userApp.post("/users", async(req, res) => {
    // Handle POST request for creating a new user
    //get new user object from req body
    const newUser=req.body
    //hash the passwrod 
    const hashedPwd = await hash(newUser.password, 12)
    //replace plain password with hashed password
    newUser.password = hashedPwd
    //Create new user document in database using UserModel
    const newUserDocument=new UserModel(newUser)
    //save
    const result = await newUserDocument.save()
    console.log("New User Created:", result)
    //send response 
    res.status(201).json({message:"User Created"})
    })

    //Get all users protected route, only accessible with valid token
userApp.get("/users", verifyToken, async(req, res) => {
    const email=req.user?.email
    //Read all users
    let usersList = await UserModel.find({}) //if email is present in req.user, then find user with that email, otherwise find all users
    //send response
    if(usersList.length === 0){
        return res.status(404).json({message:"No Users found"})
    } res.status(200).json({message: "users", payload:usersList});
})

    //read a user by email \x_id object idx\
userApp.get("/actuser", verifyToken, async(req,res)=>{
    //read user email from req
    const emailOfUser = req.user?.email;
    // console.log("Email from token:", emailOfUser)

    //read object id from req params
    //const uid = req.params.id
    //find user by id 
    const userObj=await UserModel.findOne({email:emailOfUser}).populate("cart.product") //populate the product details in cart instead of just product id
    //use findOne method to read a document with non object id fields
    //use findById to read document with object id
    //if user not found send error response
    if(!userObj){
        return res.status(404).json({message:"User not found"})
    }
    //send res
    res.status(200).json({message:"user", payload:userObj})
})

    //update a user by id
userApp.put("/users/:id", verifyToken, async(req,res)=>{
    //getmodified user from request
    const modifiedUser=req.body
    const uid=req.params.id
    const hashedPwd = await hash(modifiedUser.password, 12)
    modifiedUser.password = hashedPwd
    //find user by id and update with new data
    const updatedUser = await UserModel.findByIdAndUpdate(uid, {$set:{...modifiedUser}}, {new:true, runValidators:true})
    //send response
    if(!updatedUser){
        return res.status(404).json({message:"User not found"})
    } res.status(200).json({message:"User Updated", payload:updatedUser})
})

    //delete user by id
userApp.delete("/users/:id", verifyToken, async(req,res)=>{
    //read the object id
    const uid=req.params.id
    //find user by id
    const deleteUser= await UserModel.findByIdAndDelete(uid)
    if(!deleteUser){
        return res.status(404).json({message:"User not found"})
    }
    res.status(200).json({message:"User Deleted", username:deleteUser.username})
})



//Add Product to Cart
/*userApp.put("/cart/product-id/:pid", verifyToken, async(req, res) => {
    //get product id from url params
    let prodId=req.params.pid;
    //get user email from req.user
    let email=req.user?.email;
    //get user from db
    // const user = await UserModel.findOne({email:email})
    // //if user is not authenticated, send error response
    // if(!email){
    //     return res.status(401).json({message:"Unauthorized user, please login"})
    // }
    // //if user is authenticated, add product to cart
    //before adding product to cart, check if product already exists in cart, 
    //if yes then increment the count,
    //otherwise add new product to cart with count 1

    let result=await UserModel.findOneAndUpdate({email:email},{$push:{cart:{product:prodId}}})

    //if user invalid
    if(!result){
        return res.status(404).json({message:"User not found"})
    }
    //console.log("Updated Cart", result)
    res.status(200).json({message:"Product added to cart"})
}) */

//Add Product to Cart with count increment if product already exists in cart
userApp.put("/cart/product-id/:pid", verifyToken, async(req, res) => {
    //get product id from url params
    let prodId=req.params.pid;
    //get user email from req.user
    let email=req.user?.email;
    //get user from db
    const user = await UserModel.findOne({email})
    // //if user is not authenticated, send error response
    if(!user){
         return res.status(401).json({message:"Unauthorized user, please login"})
     }

    
    // //if user is authenticated, add product to cart
    //before adding product to cart, check if product already exists in cart, 
    //if yes then increment the count,
    //otherwise add new product to cart with count 1
    //check if product already exists
    const productIndex = user.cart.findIndex(
        item => item.product.toString() === prodId
    )
    if(productIndex > -1){
        //increment count
        user.cart[productIndex].count += 1
    }
    else{
        //add new product
        user.cart.push({
            product: prodId,
            count: 1
        })
    }
    await user.save()
    //if user invalid
    // if(!result){
    //     return res.status(404).json({message:"User not found"})
    // }
    //console.log("Updated Cart", result)
    res.status(200).json({message:"Product added to cart"})
})

//app.use(verifyToken) ---> every request //application level middleware
//userApp.get("/users", verifyToken, async(req, res) => {}) ---> only for this route //route level middleware 






/*  Handling unavailable resources
    Validators during update
    Hashing Password
    Unique Fields
    Refined Version of error handling middleware */