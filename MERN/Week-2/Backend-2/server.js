//Create HTTP Server
//express module has exported with default function, so we can import it with any name, but we will use express as it is a convention
//express module contains http server and other functionalities, so we will use it to create our server

import exp from "express" //importing express module, we can use any name for the variable, but we will use exp as it is a convention
const app = exp() //variable name can be anything, but we will use app as it is a convention
import { userApp } from "./APIs/UserAPI.js" //importing userApp from UserAPI.js file
import { productApp } from "./APIs/ProductAPI.js" //importing productApp from ProductAPI.js file

//Use body parser middleware to parse the body of the request object and make it available in req.body
//body parser is a middleware that parses the body of the request object and makes it available in req.body
//body parser is a built-in middleware in express, so we can use it without installing any package
app.use(exp.json()) //to parse JSON data sent by the client in the body of the request object

//Create a Custom Middleware 
function middleware1(req, res, next){
    //Send response from middleware
    //res.json({message:"Response from Middleware 1"})
    console.log("Middleware 1 Executed") //if no next() is used then this will be the response for every request and the control will not be passed to the next middleware or route handler in the stack, hence the client will not receive the response from the route handler, instead it will receive the response from this middleware for every request.
    //next() is used to pass the control to the next middleware or route handler in the stack. If we do not call next(), the request will be left hanging and the client will not receive a response.
    next() //to pass the control to the next middleware or route handler in the stack
}

function middleware2(req, res, next){
    //Send response from middleware
    //res.json({message:"Response from Middleware 2"})
    console.log("Middleware 2 Executed")
    next() //to pass the control to the next middleware or route handler in the stack
}

app.use(middleware1) //to use the custom middleware in our application, it will be executed for every incoming request to the server, as it is used at the application level with app.use()
app.use(middleware2)

//forware req to userAPI  if path starts with /user-api
app.use('/user-api', userApp) //to forward the request to the userAPI if the path starts with /user-api

//forware req to productAPI  if path starts with /product-api
app.use('/product-api', productApp) //to forward the request to the productAPI if the path starts with /product-api

//Set a port number for our server to listen on
const PORT = 3000
//assign port number to HTTP server and start listening for incoming requests
app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}...`))

//app.Method(path, requestHandler) - Method is the HTTP method (GET, POST, PUT, DELETE, etc.), path is the endpoint that the client can access, requestHandler is the function that will be executed when the client makes a request to that endpoint
//app.get() - used to handle GET requests, which are used to retrieve data from the server
//app.post() - used to handle POST requests, which are used to create new data on the server
//app.put() - used to handle PUT requests, which are used to update existing data on the server
//app.delete() - used to handle DELETE requests, which are used to delete data from the server