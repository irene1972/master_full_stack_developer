//Creation and configuration of the express app
const express=require("express");
const cors=require("cors");
const dayjs=require("dayjs");
const fs=require('node:fs/promises');

const app=express();
app.use(express.json());
app.use(cors());

//Middleware que crea un log de peticiones
app.use(async(req,res,next)=>{
    const linea=`[${dayjs().format('DD-MM-YYYY HH:mm')}] Método: ${req.method}. Url: ${req.url}\n`;
    await fs.appendFile('main.log',linea);
    next();
});

//Route configuration
app.use('/api',require('./routes/api.routes'));

//404 handler
app.use((req,res,next)=>{
    res.status(404).json({
        message: "Not found"
    });
});

//Error handler
app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).json({message:err.message});
});

module.exports=app;