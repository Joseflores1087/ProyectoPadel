const { request, response } = require("express");
const pool = require("../database/database");


/****************GET TURNO***********************/
const GetHorario = async (req, res = response)=>{
    const {id} = req.params;
    console.log('Hola', id);
try {
    horario = await pool.query("SELECT * FROM horarios WHERE id_cancha = ?",[id]);
    
        if (turno.length > 0) {
            return res.send(horario);
        } else {
            res.status(404).json({ message: 'Not result' });
        }
} catch (error) {
    
}
}
/****************END GET TURNO***********************/


    

module.exports = {
    GetHorario,
    
}
