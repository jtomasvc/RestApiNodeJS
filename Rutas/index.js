const {Router} = require('express');
const Rutas = Router();

const {GetUsers, CrearUsuarios, GetUsersId, EliminarUsuarios, ActualizarUsuario} =require('../Controladores/index.controlador.js');

Rutas.get('/users', GetUsers);
Rutas.get('/users/:id', GetUsersId);
Rutas.post('/users', CrearUsuarios);
Rutas.delete('/users/:id', EliminarUsuarios);
Rutas.put('/users/:id', ActualizarUsuario);

module.exports = Rutas;