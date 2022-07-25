const { response, request } = require("express");
const pool = require("../database/database");


/****************GET TURNO***********************/
const GetHorario = async (req, res = response)=>{
    const { id } = req.params;
    console.log('Hola', req.params);
try {
    horario = await pool.query("SELECT * FROM horarios WHERE id_cancha = ?",[id]);
    
        if (horario.length > 0) {
            return res.send(horario);
        } else {
            res.status(404).json({ message: 'Not result' });
        }
} catch (error) {
    
}
}
/****************END GET TURNO***********************/

const AddHorario = async (req, res = response)=>{
    const { id } = req.params;
    console.log('Hola', req.params);
try {
    horario = await pool.query("INSERT * FROM horarios WHERE id_cancha = ?",[id]);
    
        if (horario.length > 0) {
            return res.send(horario);
        } else {
            res.status(404).json({ message: 'Not result' });
        }
} catch (error) {
    
}
}

    

module.exports = {
    GetHorario,
    AddHorario
    
}
