//Create express app
import exp from "express"
import {connect} from "mongoose"
import {userApp} from "./APIs/UserAPI.js"
import {prodApp} from "./APIs/ProductAPI.js"
import cookieParser from "cookie-parser"
import {config} from "dotenv"

config(); //process.env 


const app=exp();
app.use(exp.json()) //middleware to parse JSON data in request body
app.use(cookieParser()) //middleware to parse cookies in request header and populate req.cookies object
// const port=4000
//forware req to UserAPI if path starts with /user-api
app.use("/user-api", userApp)
//forware req to ProductAPI if path starts with /product-api
app.use("/product-api", prodApp)

//connect to database server
//connect("").then().catch() - one way 
/*async function connectDB(){
    try{
        await connect("mongodb://localhost:27017/mydb2")
        console.log("Connected to database successfully")
        //start server
        app.listen(port,()=>console.log(`Server on port ${port}...`))

    }catch(err){
        console.log("Error connecting to database:", err)
    }
}*/

const port = process.env.PORT || 4000

//connect to db server
async function connectDB(){
    try{
        await connect(process.env.DB_URL)
        console.log("Connected to database successfully")
        //start server
        app.listen(port,()=>console.log(`Server on port ${port}...`))

    }catch(err){
        console.log("Error connecting to database:", err)
    }
}

connectDB()

//error handling middleware to convert html to json
app.use((err, req, res, next) => {
    // console.error(err.stack)
    // res.status(500).json({message: "Internal Server Error"})
    if(err.name === 'ValidationError' || err.name === 'CastError'){
        res.status(400).json({message:"error occured", error:err.message})
    } else if(err.code === 11000){
        res.status(400).json({message:"Duplicate key error", error:err.message})
    } else {
        res.status(500).json({message: "Internal Server Error", error: err.message})
    }
})

/* Handling errors in REST API 
    ->Parts of an error is 
        name
        message 
        call stack
    ->use of middleware is server.js to get an json error format rather than html format*/