const { response, request } = require("express");
const pool = require("../database/database");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");


//-------------------------------------------------------
//GET----------------------------------------------------
const GetJugador = async (req, res = response) => {
  const { id }= req.params;
  try {
    const jugador = await pool.query(
      "SELECT j.*, s.id AS id_seguidores FROM jugador j LEFT JOIN seguidores s ON s.id_seguido=j.id AND s.id_jugador= ? WHERE 1",[id]);
    if (jugador.length > 0) {
      res.send(jugador);
    } else {
      res.send("No existen Usuarios");
      res.status(404).json({
        message: "Not result",
      });
    }
  } catch (e) {
    res.status(404).json({ message: "Somenthing goes wrong!" });
  }
};

//-------------------------------------------------------
//GET----------------------------------------------------
const GetJugadorById = async (req, res = response) => {
  const { id } = req.params;  
  try {
    const jugador = await pool.query(
      "SELECT * FROM jugador WHERE id = ?",[id]
    );
    if (jugador.length > 0) {
      res.send(jugador);
    } else {
      res.send("No existen Usuarios");
      res.status(404).json({
        message: "Not result",
      });
    }
  } catch (e) {
    res.status(404).json({ message: "Somenthing goes wrong!" });
  }
};
//-----------------------------------------------------------
//----------------------------GRABAR JUGADOR-------------------------
const NewJugador = async (req, res = response) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json(errors);
  }
  //console.log(req.body);
  const {
    nombre,
    apellido,
    dni,
    f_nacimiento,
    email,
    sexo,
    n_celular,
    password,
    foto_perfil = req.file,
  } = req.body;

  try {
    const usuario = await pool.query(
      "SELECT * FROM jugador WHERE email = ?",
      [email],
      async (error, results) => {
        if (error) {
          return res.status(400).json(error);
        } else {
          // ----------------------------------------------
          // -------Verifica si existe el dni-------------
          if (results[0]) {
            return res.status(200).json({
              ok: false,
              msj: "Ya existe un Usuario Asociado a esa direccion de email",
            });
          } else if (!results[0]) {
            //Encriptar Password
            let salt = await bcryptjs.genSalt();
            let passwordhash = await bcryptjs.hash(password, salt);
            //Query
            let myQuery = `INSERT INTO jugador( nombre, apellido,dni, f_nacimiento,email, sexo,n_celular,foto_perfil, password) 
             VALUES ( '${nombre}','${apellido}','${dni}','${f_nacimiento}','${email}','${sexo}','${n_celular}','${foto_perfil}','${passwordhash}')`;
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
        }
      }
    );
  } catch (error) { }
};
//-------------------------------------------------------------------------
//-------------------------EDITAR PERSONA----------------------------------
const EditJugador = async (req, res = response) => {
  console.log(req.params);
  const { id } = req.params;
  const {
    nombre,
    apellido,
    dni,
    f_nacimiento,
    email,
    sexo,
    n_celular,
    foto_perfil,
    password,
  } = req.body;
  try {
    const usuario = await pool.query(
      "SELECT * FROM jugador WHERE id = ?",
      [id],
      async (error, results) => {
        if (error) {
          console.log(error, "hola");
          return res.status(400).json(error);
        } else {
          const newLink = {
            nombre,
            apellido,
            dni,
            f_nacimiento,
            email,
            sexo,
            n_celular,
            foto_perfil,
            password,
          };
          const user = await pool.query("UPDATE jugador SET ? WHERE id = ?", [
            newLink,
            id,
          ]);
          return res.send(user);
        }
      }
    );
  } catch (error) {

  }

};

//-----------------------------------------------------------
//----------------------------DELETE PERSONA-------------------------
const DeleteJugador = async (req, res = response) => {
  const { id } = req.params;
  try {
    usuarios = await pool.query("SELECT * FROM users WHERE id =?", [id]);
  } catch (e) {
    res.status(404).json({ message: "Somenthing goes wrong!" });
  }
  if (usuarios.length > 0) {
    usuarios = await pool.query("UPDATE users SET estado ='B' WHERE id =?", [
      id,
    ]);
    res.send(usuarios);
  } else {
    res.status(404).json({ message: "Not result" });
  }
};

//------------------------------------------------------------------------
//----------------------------RECUPERAR CUENTA 1°-------------------------
const recuperarCuenta = async (req, res = response) => {
  console.log(req.body);
  const { correo } = req.body;
  try {
    const aleatorio = Math.floor(Math.random() * 10000 + 1); //crea un numero aleatorio
    const usuario = await pool.query(
      "SELECT * FROM jugador WHERE email = ?",
      [correo],
      async (error, results) => {
        if (error) {
          console.log(error, "Error");
          return res.status(400).json(error);
        } else {
          if (results[0]) {
            console.log("hola");
            const myQuery = pool.query(
              `UPDATE jugador  SET aleatorio ='${aleatorio}' WHERE email = '${correo}'`,
              async (error, aleatorio) => {
                if (error) {
                  return res.status(400).json(error);
                  console.log(error);
                } else {
                  return res.status(200).json({
                    msj: 'Código envido con exito'
                    // aleatorio,
                    // results,
                  });
                }
              }
            );
            //Mail
            const nodemailer = require("nodemailer");
            const transporter = nodemailer.createTransport({
              host: "smtp.gmail.com",
              port: 465,
              secure: true, // true for 465, false for other ports
              auth: {
                user: "jose.flores1087@gmail.com", // generated ethereal user
                pass: "torhpwvhqiibbwxn", // generated ethereal password
              },
              tls: {
                rejectUnauthorized: false,
              },
            });
            transporter.verify().then(() => {
              console.log("Listo para Mandar mails");
            });
            const info = await transporter.sendMail({
              from: '"no-reply" <jose.flores1087@gmail.com>', // sender address
              //to: results[0].correo, // list of receivers
              to: "albertojoseponce@gmail.com",
              subject: "Hello ✔", // Subject line
              text: "Cuenta recuperada", // plain text body
              html: "<strong>Codigo recuperación de cuenta: </strong><br>" + aleatorio, // html body  
            });
            console.log(info.messageId);
            //----------END MAILER----------------------------
            // return res.status(200).json({
            //   msj: "Ya existe un Usuario Asociado a ese N° de CUIT",
            //   results,
            // });
          } else {
            return res.status(200).json({
              msj: "Este Usuario no Existe",
            });
          }
        }
      }
    );
  } catch (error) { }
};
//-----------------------------------------------------------
//----------------------------RECUPERAR CUENTA 2°-------------------------
const corroborarCodigo = async (req, res = response) => {
  const { correo, cod_aleatorio } = req.body;
  try {

    const usuario = await pool.query(
      "SELECT * FROM users WHERE email = ?",
      [correo],
      async (error, results) => {
        if (error) {
          console.log(error, "Error");
          return res.status(400).json(error);
        } else {
          // ----------------------------------------------
          // -------Verifica si existe el correo-------------
          if (results[0]) {
            if (results[0].aleatorio == cod_aleatorio) {
              //pregunta si el password ingresado
              return res.status(200).json({
                //es igual al codigo aleatorio almacenado en la BD

                msj: "Codigo recuperación correcto",
              });
            } else {
              (results[0].aleatorio != cod_aleatorio)
              return res.status(200).json({
                ok: true,
                msj: "Codigo recuperación incorrecto",
              });
            };
          } else {
            return res.status(200).json({
              ok: false,
              msj: "Este Usuario no Existe",
            });
          }
        }
      }
    );
  } catch (error) { }
};
//-----------------------------------------------------------
//----------------------------RECUPERAR CUENTA 3°-------------------------
const cambiarPassword = async (req, res = response) => {
  const { correo, password } = req.body;
  try {  
      const usuario = await pool.query(
        "SELECT * FROM users WHERE email = ?",
        [correo],
        async (error, results) => {
          if (error) {
            console.log(error, "Error");
            return res.status(400).json(error);
          } else {
            // ----------------------------------------------
            // -------Verifica si existe el correo-------------
            if (results[0]) {
              //Encriptar Password
              let salt = bcryptjs.genSaltSync();
              let passwordhash = bcryptjs.hashSync(password, salt);
              const myQuery = pool.query(
                `UPDATE jugador  SET password ='${passwordhash}', aleatorio = '' WHERE email = '${correo}'`,
                async (error, aleatorio) => {
                  if (error) {
                    return res.status(400).json(error);
                    console.log(error);
                  } else {
                    return res.status(200).json({
                      ok: true,
                      msj: 'Password Modificada con éxito!'
                    });
                  }
                }
              );
            } else {
              return res.status(200).json({
                ok: false,
                msj: "Este Usuario no Existe",
              });
            }
          }
        }
      );
    

  } catch (error) { }
};


const GetSeguidos = async (req, res = response) => {
  const { id } = req.params;
  console.log(id);
  try {
    const seguidor = await pool.query(
      "SELECT s.id_jugador, j.nombre, j.apellido FROM jugador j INNER JOIN seguidores s ON s.id_jugador = ? AND s.id_seguido = j.id WHERE s.visto = 'SI'", [id]);
    if (seguidor.length > 0) {
      res.send(seguidor);
    } else {
      res.send("No existen Usuarios");
      res.status(404).json({
        message: "Not result",
      });
    }
  } catch (e) {
    res.status(404).json({ message: "Somenthing goes wrong!" });
  }
}

const FollowJugador = async (req, res = response) =>{
  const { id_jugador , id_seguido }= req.body;
  
try {
  let myQuery = `INSERT INTO seguidores (id_jugador, id_seguido) VALUES ('${id_jugador}','${id_seguido}')`;
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
} 

module.exports = {
  GetJugador,
  GetJugadorById,
  NewJugador,
  EditJugador,
  DeleteJugador,
  recuperarCuenta,
  corroborarCodigo,
  cambiarPassword,
  GetSeguidos,
  FollowJugador
};
