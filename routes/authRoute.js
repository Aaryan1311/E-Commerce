import express from 'express'
import {registerController, loginController, testController} from "../controllers/authController.js"
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
//router object
const router = express.Router()

//routing

//signup || Method POST
router.post('/signup', registerController)

//login || Method POST
router.post('/login',loginController);

//test routes
router.get('/test', requireSignIn, isAdmin, testController)

export default router