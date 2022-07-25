const { response, request } = require("express");
const pool = require("../database/database");

/****************GET TURNO***********************/
const GetHorario = async (req, res = response) => {
  const { id } = req.params;
  try {
    horario = await pool.query("SELECT * FROM horarios WHERE id_cancha = ?", [
      id,
    ]);

    if (horario.length > 0) {
      return res.send(horario);
    } else {
      res.status(404).json({ message: "Not result" });
    }
  } catch (error) {}
};
/****************END GET TURNO***********************/

const AddHorario = async (req, res = response) => {
  const { id } = req.params;
  const { id_cancha, hora_desde, hora_hasta } = req.body;
  try {
    let myQuery = `INSERT INTO horarios (id_cancha, hora_desde, hora_hasta) VALUES ('${id_cancha}','${hora_desde}','${hora_hasta}')`;
    pool.query(myQuery, (error, results) => {
      if (error) {
        return res.status(400).json(error);
        console.log(error);
      } else {
        return res.status(200).json({
          ok: true,
          results,
        });
      }
    });
  }
  catch (error) {

  }
};

module.exports = {
  GetHorario,
  AddHorario,
};
