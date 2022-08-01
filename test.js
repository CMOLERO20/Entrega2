const Contenedor = require('./Contenedor');

const product = new Contenedor('./productos.txt');

let productos =  product.getAll();

console.log(productos)