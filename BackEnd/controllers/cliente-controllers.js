const { response, request } = require("express");
const pool = require("../database/database");
const bcryptjs = require("bcryptjs");
// const fetch = require("node-fetch");
// const nodemailer = require("nodemailer");

//-------------------------------------------------------
//GET----------------------------------------------------
const GetCliente = async (req = request, res = response) => {
  try {
    const cliente = await pool.query(
      "SELECT * FROM jugador WHERE estado = 'A'"
    );
    if (cliente.length > 0) {
      res.send(cliente);
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
//GET by ID----------------------------------------------------
const getById = async (req = request, res = response) => {
  try {
    users = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
  } catch (e) {
    res.status(404).json({ message: "Somenthing goes wrong!" });
  }
  if (users.length > 0) {
    res.send(users);
  } else {
    res.status(404).json({
      message: "Not result",
    });
  }
};
//-----------------------------------------------------------
//----------------------------GRABAR PERSONA-------------------------
const NewCliente = async (req, res = response) => {
  console.log(req.body);
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
      "SELECT * FROM jugador WHERE dni = ? OR n_celular =?",
      [dni, n_celular],
      async (error, results) => {
        if (error) {
          return res.status(400).json(error);
        } else {
          // ----------------------------------------------
          // -------Verifica si existe el dni-------------
          if (results[0]) {
            return res.status(200).json({
              ok: false,
              msj: "Ya existe un Usuario Asociado a ese DNI o Numero de celular",
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
  } catch (error) {}
};
//-------------------------------------------------------------------------
//-------------------------EDITAR PERSONA----------------------------------
const editUser = async (req, res = response) => {
  console.log(req.body);
  const { id } = req.params;
  const { nombre, apellido, dni, revista, mail } = req.body;
  const usuario = await pool.query(
    "SELECT * FROM users WHERE id = ?",
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
          revista,
          mail,
        };
        const user = await pool.query("UPDATE users SET ? WHERE id = ?", [
          newLink,
          id,
        ]);
        return res.send(user);
      }
    }
  );
};

//-----------------------------------------------------------
//----------------------------DELETE PERSONA-------------------------
const deleteUser = async (req, res = response) => {
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
//------------------------------------------------------------------
//------------------------------------------------------------------
const hola = async (req, res = response) => {
  const { id } = req.params;
  const password = "nueveonce";
  //Encriptar Password
  let salt = await bcryptjs.genSalt();
  let passwordhash = await bcryptjs.hash(password, salt);
  console.log(id);
  try {
    users = await pool.query("SELECT * FROM users WHERE id =?", [id]);
  } catch (e) {
    res.status(404).json({ message: "Somenthing goes wrong!" });
  }
  if (users.length > 0) {
    users = await pool.query("UPDATE users SET pass= ? WHERE id =?", [
      passwordhash,
      id,
    ]);
    res.send(users);
  } else {
    res.status(404).json({ message: "Not result" });
  }
};
//-----------------------------------------------------------
//----------------------------RECUPERAR CUENTA-------------------------
const changePaass = async (req, res = response) => {
  // const {id}= req.params;
  console.log("id");

  //  try {
  //    const usuario = await pool.query(
  //      "SELECT * FROM users WHERE id = ?",
  //      [id],
  //      async (error, results) => {
  //        if (error) {
  //          console.log(error, "Error");
  //          return res.status(400).json(error);
  //        } else {
  //          // ----------------------------------------------
  // //         // -------Verifica si existe el dni-------------
  //          if (results[0]) {
  // //           //Mail
  //            const nodemailer = require("nodemailer");
  // //           // create reusable transporter object using the default SMTP transport
  //            const transporter = nodemailer.createTransport({
  //              host: "smtp.gmail.com",
  //              port: 465,
  //              secure: true,  //true for 465, false for other ports
  //              auth: {
  //                user: "jose.flores1087@gmail.com", // generated ethereal user
  //                pass: "xetbwxsxkmtrvczr", // generated ethereal password
  //              },
  //              tls: {
  //                rejectUnauthorized: false,
  //              },
  //            });
  //            transporter.verify().then(() => {
  //              console.log("Listo para Mandar mails");
  //            });

  //            const info = await transporter.sendMail({
  //              from: '"no-reply" <jose.flores1087@gmail.com>', // sender address
  //              to: results[0].correo, // list of receivers
  //              subject: "Hello ✔", // Subject line
  //              text: "Cuenta recuperada", // plain text body
  //              html: "<b>Proabndo Recuperar Cuenta</b>", // html body
  //            });

  //            console.log(info.messageId);
  // //           //----------END MAILER----------------------------
  //            return res.status(200).json({
  //              msj: "Ya existe un Usuario Asociado a es N° de CUIT",
  //              results,
  //            });
  //          } else {
  //            // return res.status(200).json({
  //            //   msj: "Este Usuario no Existe",
  //            // });
  //          }
  //        }
  //      }
  //   );
  //  } catch (error) {}
};

module.exports = {
  GetCliente,
  getById,
  changePaass,
  hola,
  NewCliente,
  editUser,
  deleteUser,
};
