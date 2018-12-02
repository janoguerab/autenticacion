'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const app=express()
const api = require('./routes')

//Middelware
app.use(bodyParser.urlencoded({ extended:false }))
app.use(bodyParser.json())


//Listeners - Peticiones REST
app.use('/api',api)

module.exports = app
