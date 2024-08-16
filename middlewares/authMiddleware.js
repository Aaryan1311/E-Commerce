import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

//Protected Routes token base

export const requireSignIn = async (req,res,next) => {
    try {
        const decode = jwt.verify(
            req.headers.authorization, 
             process.env.jwt_secret
            );
            
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
}


//admin access
export const isAdmin = async(req,res,next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if(user.role !== 1){
            return res.status(403).send({
                succes: false,
                message: "Unauthorized Access"
            })
        }
            next();

    } catch (error) {
        console.log(error)
        res.status(403).send({
            success: false,
            message: "Error in Admin Middleware",
            error,
        })
    }
}