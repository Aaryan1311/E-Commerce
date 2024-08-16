import express from 'express'
import {registerController, loginController} from "../controllers/authController.js"

//router object
const router = express.Router()

//routing

//signup || Method POST
router.post('/signup', registerController)

//login || Method POST
router.post('/login',loginController);

export default router