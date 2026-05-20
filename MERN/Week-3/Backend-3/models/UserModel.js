import {Schema, model, Types} from 'mongoose'

//Create Cart Schema {product ,count}
const cartSchema = new Schema({
    product:{
        type: Types.ObjectId,
        ref: "product" //name of the product model
    },
    count:{
        type: Number,
        default: 1
    }
})

//Create User Schema (username, name, email, age, password)
const userSchema = new Schema({
    //structure of user resources
    username:{
        type: String,
        required: [true, "Username is required"],
        minLength: [6, "Username must be at least 6 characters long"],
        maxLength: [18, "Username must be at most 18 characters long"],
        unique: [true, "Username already exists"]
    },
    name:{
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name must be at least 3 characters long"],
        maxLength: [25, "Name must be at most 25 characters long"]
    },
    email:{
        type: String,
        required: [true, "Email is required"],
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
        unique: [true, "Email already exists"]
    },
    age:{
        type:Number, 
        required: [true, "Age is required"],
    },
    password:{
        type: String, 
        required: [true, "Password is required"],
        minLength: [6, "Password must be at least 6 characters long"],
        //match: [/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Password must contain at least one letter, one number and one special character"]
    },
    cart:[cartSchema], //{product: "", count: 2}
},
{
    versionKey: false,
    timestamps: true
},
);

//Generate UserModel
export const UserModel = model("user", userSchema)