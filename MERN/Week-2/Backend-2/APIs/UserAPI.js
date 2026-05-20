//Create mini-express app (Seperate Route)
import exp from "express";
export const userApp=exp.Router();

let users=[]

//Route to handle GET req of Client(http://localhost:3000/users) or (http://127.0.0.1:3000/users)
userApp.get('/users',(req, res)=>{
    //send response to client
    res.json({message: "All Users Data Shared Successfully", payload: users})
})

//Route to handle GET req with URL parameter of client
userApp.get('/users/:id',(req,res)=>{
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
userApp.post('/users',(req, res)=>{
    //get user/data from client 
    //console.log(req.body) //to see the data sent by the client in the body of the request object
    const newUser=req.body //to get the data sent by the client in the body of the request object and store it in a variable
    //push user into users
    users.push(newUser) //to add the new user to the users array
    //send response to client
    res.json({message: "New User Created Successfully"})
})

//Route to handle PUT req of Client
userApp.put('/users',(req, res)=>{
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
userApp.delete('/users/:id',(req, res)=>{
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