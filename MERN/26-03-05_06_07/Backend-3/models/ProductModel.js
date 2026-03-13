// Create Product REST API with below features
// Product document structure
//      a.productId (required)
//      b.productName(required)
//      c.price(required, min price 10000 and max price 50000)
//      d.brand(required)

import {Schema, model} from "mongoose"

//Create Product Schema 
const prodSchema = new Schema({
    productID:{
        type:String,
        required: [true, "productID is required"],
        unique:[true, "productID already exists"]
    },
    productName:{
        type:String,
        required: [true, "Name is Required"],
    },
    price:{
        type:Number,
        required: [true,"Mention Price"],
        min:10000,
        max:50000
    },
    brand:{
        type:String,
        required: [true, "Brand Required"]
    }
},{
    timestamps: true,
    versionKey: false
},
);

export const prodModel=model("product", prodSchema)