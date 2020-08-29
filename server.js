const express = require('express');
const app = express()
const connectDB = require('./DB/connection')
const Port = process.env.Port || 3000;
app.listen(Port,()=>{
    console.log('Port connected')
})

app.get('/daniel', (req,res)=>{
    res.send('daniverse')
})
