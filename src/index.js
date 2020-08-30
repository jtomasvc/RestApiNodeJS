const express = require('express');
const app = express();

//Configuracion
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Rutas
app.use(require('../Rutas/index.js'));

app.listen(3000)
console.log('servidor en el puerto 3000');
