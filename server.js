import express from 'express';//framework 
import  colors from 'colors'; //color in console
import dotenv from 'dotenv'; //hide confidential data
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoute.js'

//configure env
dotenv.config();

//database config
connectDB();

//rest object
const app = express();

//port
const port = process.env.port;

//middlewares
app.use(express.json())
app.use(morgan('dev'))
 
//routes
app.use('/api/v1/auth',authRoutes)


//rest api 
app.get('/',(req,res) => {
    res.send({
        message:"Welcome to ecommerce app."
    })
})

//run listen
app.listen(port,() =>{
    console.log(`Server is running on ${port}`.bgCyan.white);
})