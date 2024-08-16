import { hashPassword, comparePassword } from "../helpers/authHelper.js";
import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken";

export const registerController = async(req,res) => {
    try {
        const {name,email,password,phone,address} = req.body
        //validation
        if(!name){
            return res.send({
                error :"Name is Required",
            })
        }
        if(!email){
            return res.send({
                error :"Email is Required",
            })
        }
        if(!password){
            return res.send({
                error :"Password is Required",
            })
        }
        if(!phone){
            return res.send({
                error :"Phone-number is Required",
            })
        }
        if(!address){
            return res.send({
                error :"Address is Required",
            })
        }

        //check if user already exist

        const UserExist = await userModel.findOne({email})

        //if user alreay exist
        if(UserExist){
            return res.status(200).send({
                success: true,
                message: "This email alreay exist. Please Login"
            })
        }

        //register user
        const hashedPassword = await hashPassword(password)

        //save
        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password:hashedPassword
        }).save()

        res.status(201).send({
            success: true,
            message: "SignUp Successfully",
            user,
        })


    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "SignUp Failed",
            error,
        })
    }
};


export const loginController = async (req,res) => {
    try {
        const {email,password} = req.body

        //validate
        if(!email || !password){
            res.send(201).send({
                success: false,
                message: "Invalid email or Password"
            })
        }

        //check if email exist
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(404).send({
                success: false,
                message: "Email does not exist, Please Signup"
            })
        }

        const match = await comparePassword(password,user.password);

        //check if password is correct

        if(!match){
            return res.status(201).send({
                success: false,
                message: "Login Failed, Wrong Password",
            })
        }

        const token = await jwt.sign({_id: user._id }, process.env.jwt_secret,{
            expiresIn:  "7d",
        });

        res.status(200).send({
            success: true,
            messagee: "Login Successfully",
            user:{
                name: user.name,
                email: user.email,
                phone: user.phone,
                address: user.address,
            },
            token,

        })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Login Failed",
            error,
        })
    }
};


//test controller

export const testController = (req,res) => {
    res.send('Protected Route')
}

