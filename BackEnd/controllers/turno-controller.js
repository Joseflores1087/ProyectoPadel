const { request, response } = require("express");
const pool = require("../database/database");
const bcryptjs = require("bcryptjs");

const GetReserva = async (req = request, res = response)=>{
    console.log('hola');
try {
    turno = await pool.query("SELECT * FROM reservas");
        if (turno.length > 0) {
            return res.send(turno);
        } else {
            res.status(404).json({ message: 'Not result' });
        }
} catch (error) {
    
}
}

/****************GET TURNO***********************/
const GetTurno = async (req = request, res = response)=>{
    console.log('hola');
try {
    turno = await pool.query("SELECT j.nombre AS nombre, j.apellido AS apellido ,t.id_cancha, t.hora_inicio, t.hora_fin,t.turno_fijo, t.estado AS cancha, c.nombre_cancha AS predio, c.direccion AS direccion FROM reservas t INNER JOIN jugador j ON t.id_jugador = j.id INNER JOIN predio c ON t.id_cancha = c.id WHERE t.estado = 'A' ORDER BY T.id_cancha;");
        if (turno.length > 0) {
            return res.send(turno);
        } else {
            res.status(404).json({ message: 'Not result' });
        }
} catch (error) {
    
}
}
/****************END GET TURNO***********************/

/****************NEW TURNO***********************/
const NewTurno = async (req, response)=>{
try {
    
} catch (error) {
    
}
}
/****************END NEW TURNO***********************/

/****************DELETE TURNO***********************/
const DeleteTurno = async (req, response)=>{
try {
    
} catch (error) {
    
}
}
/****************END DELETE TURNO***********************/

/****************GET BY ID TURNO***********************/
const GetTurnoById = async (req, response)=>{
try {
    
} catch (error) {
    
}
}
/****************END GET BY ID TURNO***********************/

module.exports = {
    GetReserva,
    GetTurno,
    NewTurno,  
    DeleteTurno, 
    GetTurnoById
}
