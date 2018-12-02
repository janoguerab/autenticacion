'use strict'

const mongoose = require('mongoose')
const app = require('./app');
const config = require('./config')

//Conección a MongoDB con mongoose
mongoose.connect(config.db,{
    auth:config.auth,
    useNewUrlParser: true
    }, (err,res)=>{
    if (err){
        return console.log(`** Error al conectar con la base de datos: \n\t${err}`)
    }
    console.log(`Conección a la base de datos establecida...!`)
//escucha el servidor express
    app.listen(config.port,() => {
        console.log(`API REST corriendo en http://localhost:${config.port}`);
    })
})
