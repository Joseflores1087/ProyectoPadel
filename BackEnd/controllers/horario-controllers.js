const { request, response } = require("express");
const pool = require("../database/database");


/****************GET TURNO***********************/
const GetHorario = async (req = request, res = response)=>{
    const {id} = req.params;
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
