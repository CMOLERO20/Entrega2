const express = require('express');
const Contenedor = require('./Contenedor');

const app = express();
const product = new Contenedor('./productos.txt');

app.get('/productos',(req,res)=> {
    let productos = product.getAll();
    res.send(`productos ${productos}`)
}) 
app.get('/productoRandom',(req,res)=> {
    let productos = product.getAll();
    let productoRandom = Math.floor(Math.random() * productos.length)
    console.log(productos)
    res.send(`producto ${productos[productoRandom]}`)
}) 


const server = app.listen(8080 , () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on('error', error => console.log(`Error en servidor ${error}`));