'use strict'

const express = require('express')
const api = express.Router()
//Requerir middleware de autenticacion (verifica si tiene acceso)
const auth = require('../middlewares/auth')
//Requerir controladores
const productControl = require('../controllers/product')
const userControl = require('../controllers/user')

//REST Productos
api.get('/product',productControl.getProducts)
api.get('/product/:productId', productControl.getProduct)
api.post('/product',productControl.saveProduct)
api.put('/product/:productId',productControl.updateProduct)
api.delete('/product/:productId',productControl.deleteProduct)
//REST USER
api.post('/singup',userControl.singUp)
api.post('/singIn',userControl.singIn)
//acceso privado
api.get('/private',auth, function (req, res) {
    res.status(200).send({ message: 'Tienes Acceso' })
})



module.exports = api
