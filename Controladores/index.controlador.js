const {Pool} = require('pg');

const pool = new Pool ({
    host: 'localhost',
    user: 'postgres',
    password: 'Tomas1995.',
    database: 'primerapi',
    port: '5432'
})

const GetUsers =  async (req, res) => {
    const respuesta = await pool.query('SELECT * FROM Usuariospg');
    res.status(200).json(respuesta.rows);
 }

const GetUsersId = async (req, res) =>{
    const id = req.params.id;
    const respuestica = await pool.query('SELECT * FROM Usuariospg WHERE id= $1', [id]);
    res.json(respuestica.rows);
}

const CrearUsuarios = async (req, res) => {
    const {nombre,edad,email} = req.body;
    const respuestas =  await pool.query('INSERT INTO Usuariospg (nombre, edad, email) VALUES ($1, $2, $3)',[nombre,edad,email]);
    console.log(respuestas);
    res.json({
        message: 'Usuario agregado correctamente',
        body:{
            usuario: {nombre, edad, email}
        }
    })
}

const EliminarUsuarios = async (req, res) => {
    const id = req.params.id;
    const respuestita = await pool.query('DELETE FROM Usuariospg WHERE id = $1', [id]);
    console.log(respuestita);
    res.json(`Usuario ${id} Eliminado sin problemas`);
}

const ActualizarUsuario = async (req, res) => {
    const id = req.params.id;
    const {nombre, edad, email} = req.body;
    const respuestota = await pool.query('UPDATE Usuariospg SET nombre = $1, edad = $2, email = $3 WHERE id = $4',[nombre, edad, email, id]);
    console.log(respuestota)
    res.json('Usuario Actualizado');

}

 module.exports = {
     GetUsers,
     CrearUsuarios,
     GetUsersId,
     EliminarUsuarios,
     ActualizarUsuario
 }