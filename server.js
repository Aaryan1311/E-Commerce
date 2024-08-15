const express = require('express') //framework 
const  colors = require('colors') //color in console
//rest object
const app = express();

//port
const port = 8080;
 
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