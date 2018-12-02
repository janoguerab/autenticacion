'use strict'

//Importar modelo base de datos//
const Product = require('../models/product')

//obtener un producto
function getProduct(req,res) {
    let productId=req.params.productId

    Product.findById(productId,(err,product)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
        if(!product) return res.status(404).send({message:`El producto no existe`})

        res.status(200).send({ product })
    })
}
//obtener todos los productos
function getProducts(req,res) {
    Product.find({},(err,products)=>{
        if(err) return res.status(500).send({message:`Error al realizar la petición: ${err}`})
        if(!products) return res.status(404).send({message:`No existen productos`})

        res.status(200).send({products})
    })
}
//guardar un producto
function saveProduct(res,req) {
    console.log('POST /api/product');
    console.log(req.body)

    let product = new Product()
    product.name = req.body.name
    product.picture = req.body.picture
    product.price = req.body.price
    product.category = req.body.category
    product.description = req.body.description

    product.save((err,productStored)=>{
        if(err) res.status(500).send({message:`error al guardar en la base de datos ${err}`})
        res.status(200).send({product:productStored})
    })
}
//editar un producto
function updateProduct(req,res) {
    let productId = req.params.productId
    let update = req.body
    Product.findByIdAndUpdate(productId,update,(err,productUpdate)=>{
        if (err) return res.status(500).send({message:`Error al actualizar el producto: ${err}`})

        res.status(200).send({product:productUpdate})
    })
}
//eliminar un producto
function deleteProduct(req,res) {
    let productId=req.params.productId
    Product.findByIdAndDelete(productId,(err,product)=>{
        if(err) return res.status(500).send({message:`error al borrar en la base de datos: ${err}`})
        if(!product) return res.status(404).send({message:`El producto no existe`})
        res.status(200).send({message:`El producto ha sido elimindado`})
    })
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}
