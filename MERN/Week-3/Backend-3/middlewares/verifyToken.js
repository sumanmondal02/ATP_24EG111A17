import jwt from "jsonwebtoken"
const {verify} = jwt 

export function verifyToken(req, res, next){
    //token verification logic
    const token = req.cookies?.token
    //if req from unauthorized user without token, send error response
    if(!token){
        return res.status(401).json({message:"Unauthorized user, please login"})
    }
    try{
        const decodedToken = verify(token, process.env.SECRET_KEY)
        //req.user = decodedToken //why? - to access the decoded token data in the route handler functions, we can attach it to req object as req.user, so that we can access it in the route handlers as req.user
        console.log(decodedToken)
        //attach decoded user to req object, so that we can access it in the route handlers as req.user
        req.user=decodedToken
        next()
    } catch(err){
        return res.status(401).json({message:"Session expired, please login again"})
    }
}

//to access the cookies properties of request object, we need to use cookie-parser middleware otherwise req.cookies is undefined