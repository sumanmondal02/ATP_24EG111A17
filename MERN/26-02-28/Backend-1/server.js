//Create HTTP Server
//express module has exported with default function, so we can import it with any name, but we will use express as it is a convention
//express module contains http server and other functionalities, so we will use it to create our server

import exp from "express" //importing express module, we can use any name for the variable, but we will use exp as it is a convention
const app = exp() //variable name can be anything, but we will use app as it is a convention

//Use body parser middleware to parse the body of the request object and make it available in req.body
//body parser is a middleware that parses the body of the request object and makes it available in req.body
//body parser is a built-in middleware in express, so we can use it without installing any package
app.use(exp.json()) //to parse JSON data sent by the client in the body of the request object

//Set a port number for our server to listen on
const PORT = 3000
//assign port number to HTTP server and start listening for incoming requests
app.listen(PORT, ()=>console.log(`Server is running on port ${PORT}...`))

//Create API (REST API - REpresentaional State Transfer API)
//API stands for Application Programming Interface, it is a set of rules that allows different software applications to communicate with each other
//API is a way to expose the functionality of our application to the outside world, so that other applications can use it
//API is a way to create a contract between the server and the client, so that both parties know what to expect from each other
//API contains routes, which are the endpoints that the client can access to perform certain actions on the server

//app.Method(path, requestHandler) - Method is the HTTP method (GET, POST, PUT, DELETE, etc.), path is the endpoint that the client can access, requestHandler is the function that will be executed when the client makes a request to that endpoint
//app.get() - used to handle GET requests, which are used to retrieve data from the server
//app.post() - used to handle POST requests, which are used to create new data on the server
//app.put() - used to handle PUT requests, which are used to update existing data on the server
//app.delete() - used to handle DELETE requests, which are used to delete data from the server

//TestData (Replace this test data with actual database in real application)
let users=[]
let product=[]

//Route to handle GET req of Client(http://localhost:3000/users) or (http://127.0.0.1:3000/users)
app.get('/users',(req, res)=>{
    //send response to client
    res.json({message: "All Users Data Shared Successfully", payload: users})
})

//Route to handle GET req with URL parameter of client
app.get('/users/:id',(req,res)=>{
    //first get id from the URL Parameter
    let id = Number(req.params.id)
    //Check if user exists
    let ind = users.findIndex(ob=>ob.id===id)
    if(ind===-1){
        return res.json({message:"User Not Found"})
    }
    //send response to client
res.json({message:"User Found", payload:users[ind]})
})

//Route to handle POST req of Client
app.post('/users',(req, res)=>{
    //get user/data from client 
    //console.log(req.body) //to see the data sent by the client in the body of the request object
    const newUser=req.body //to get the data sent by the client in the body of the request object and store it in a variable
    //push user into users
    users.push(newUser) //to add the new user to the users array
    //send response to client
    res.json({message: "New User Created Successfully"})
})

//Route to handle PUT req of Client
app.put('/users',(req, res)=>{
    //get modified user from client{}
    let modUser = req.body //to get the data sent by the client in the body of the request object and store it in a variable
    //get index of existing user in users array 
    let ind = users.findIndex(userObj=>userObj.id===modUser.id) //to find the index of the existing user in the users array that matches the id of the modified user sent by the client
    if(ind===-1){
        return res.json({message:"User Not Found"})
    }
    //update user with index
    users.splice(ind,1,modUser) //to update the existing user in the users array with the modified user sent by the client
    //send response to client
    res.json({message:"User Updated"})
})

//Route to handle DELETE req of Client
app.delete('/users/:id',(req, res)=>{
    //get id of user from url parameter
    let idDel = Number(req.params.id) //{id:5} //Number converts into int datatype as url parameter is received as an string 
    //find index of user
    let ind = users.findIndex(userObj=>userObj.id===idDel) //to find the index of the user in the users array that matches the id sent by the client in the URL parameter
    if(ind===-1){
        return res.json({message:"User Not Found"})
    }
    //delete user by index
    users.splice(ind,1) //to delete the user from the users array that matches the index found in the previous step
    //send response to client
    res.json({message:"User Deleted"})
})

/*Create product API with below Operations 
    Create new Product ({productID, name, brand, price})
    Read all products
    Read all product by brand
    Update a Product
    Delete a Product */

app.post('/product', (req, res)=>{
    //get user data from client
    const newProduct = req.body //to get data sent from the client
    //push newproduct in the product
    product.push(newProduct)
    res.json({message:"Product Added"})
})

app.get('/product/:B', (req, res)=>{
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

app.get('/product',(req, res)=>{
    //Read all the products in the temp local mem
    res.json({message:"All Products Data Below", payload:product})
})

app.put('/product', (req, res)=>{
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

app.delete('/product/:id', (req, res)=>{
    //first take the id from the url parameter which is a string and convert to number
    let idDel = Number(req.params.id)
    let ind = product.findIndex(obj=>obj.productID===idDel)
    if(ind===-1){
        return res.json({message:"Product Not Found"})
    }
    product.splice(ind,1)
    res.json({message:"Product Deleted"})
})