const { response, request, json } = require("express");
const bcryptjs = require("bcryptjs");
const pool = require("../database/database");
const { generarJWT } = require("../helpers/generar-jwt");
// const { body } = require("express-validator");
// const passport = require('passport');

const login = async (req = request, res = response, done) => {
  console.log(req.body, "Exito");
  const { correo, password } = req.body;
  // const {password  = req.body.password;
  try {
    const usuario = pool.query(
      "SELECT * FROM user WHERE correo = ?",
      [correo],
      async (error, results) => {
        if (error) {
          console.log(error, "Error micheti");
          return res.status(400).json({ error });
        } else {

          // ----------------------------------------------
          // -------Verifica si existe el CUIT-------------

          if (!results[0]) {
            return res.status(400).json({
              msj: "El cuit es incorrecto",
            });
          }
          // ----------------------------------------------
          // -------Verifica si estado del usuario-------------
          if (results[0].estado !== "A") {
            return res.status(400).json({
              msj: "Usuario no está activo",
            });
          }
          // -------Verifica si estado VALIDADO el usuario-------------
          // if (results[0].validado !== "SI") {
          //   return res.status(400).json({
          //     msj: "Usuario no está validado",
          //   });
          // }
          // ----------------------------------------------
          // ------------Verificar password----------------
          const validPassword = bcryptjs.compareSync(password, results[0].password);
          if (!validPassword) {
            return res.json({
              ok: false,
              msj: "Usuario / Password no son correctos - password",
            });
          } else if (validPassword) {
            //si el password es válido
            // ----------------------------------------------
            // ------------Genero JWT------------------------
            const token = await generarJWT(results[0].id);
            //req.session.user = results[0].id;
            //console.log(req.session.user);
            const user = results[0];
            console.log(user);
            return res.json({
              ok: true,
              msj: "Usuario correcto",
              results,
              token,
            });
          }
        }
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el Admin",
    });
  }
};

const cambiarPass = async (req, resp = response) => {


}

const getInicio = async (req = request, res = response) => {
  const inicio = await pool.query(
    "select D.Cant As domo, F.Cant As fija, P.Cant As patente,  G.Cant As giro,  M.Cant As movil FROM (SELECT COUNT(*) As Cant FROM camaras WHERE tipo = 'domo') As D, (SELECT COUNT(*) As Cant FROM camaras WHERE tipo = 'camara fija') F, (SELECT COUNT(*) As Cant FROM camaras WHERE tipo = 'deteccion de patentes') P, (SELECT COUNT(*) As Cant FROM camaras WHERE tipo = '360') G, (SELECT COUNT(*) As Cant FROM camaras WHERE tipo = 'moviles') M"
  );
  res.send(inicio);
  console.log(req.session.id);
};



module.exports = {
  login,
  getInicio,
};
