'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app=express()
const port = process.env.PORT || 3000

//Middelware
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())


//Listeners - Peticiones REST

app.get('/api/product',(req, res)=>{
    res.status(200).send({products:[]})
})

app.get('/api/product/:productId', (req,res)=>{

})

app.post('/api/product',(req,res)=>{
    console.log(req.body)
    res.status(200).send({message:"El producto se ha recibido"})
})

app.put('/api/product/productId',(req,res)=>{

})

app.delete('/api/product/productId',(req,res)=>{

})

//Conección a MongoDB con mongoose
var uri = "mongodb+srv://cluster0-sluke.mongodb.net/test?retryWrites=true"
mongoose.connect(uri,{
    auth: {
        user: "janoguerab",
        password: "@dm1NM4ron7"
    },
    useNewUrlParser: true
    }, (err,res)=>{
    if (err) throw err
    console.log('Conección a la base de datos establecida...!');

    app.listen(port,() => {
        console.log(`API REST corriendo en http://localhost:${port}`);
    })
})
