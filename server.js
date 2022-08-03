const express = require('express');
const Contenedor = require('./Contenedor');

const app = express();
const product = new Contenedor('./productos.txt');

app.get('/productos', async(req,res) => { 
    try{
    res.send(await product.getAll())
    } catch(error) {
    res.send(error)
    }
    
    })

app.get('/productoRandom', async (req,res)=> {
    try {
    let productos = await product.getAll();
    let productoRandom = Math.floor(Math.random() * productos.length);
    res.send(productos[productoRandom]);
    } catch (error) {
        
    }
    
}) 


const server = app.listen(8080 , () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`);
});

server.on('error', error => console.log(`Error en servidor ${error}`));
