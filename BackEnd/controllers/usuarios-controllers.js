const { request, response } = require("express");
const pool = require("../database/database");
const bcryptjs = require("bcryptjs");

// const nodemailer = require("nodemailer");
//const { param } = require("../routes/user");

//-------------------------------------------------------
//GET----------------------------------------------------
const GetUser = async (req = request, res = response) => {
  try {
    users = await pool.query("SELECT * FROM user WHERE estado = 'A'");
  } catch (e) {
    res.status(404).json({ message: 'Somenthing goes wrong!' });
  }
  if (users.length > 0) {
    return res.send(users);
  }
  else {
    res.send('No existen Usuarios cargados');
    console.log('Exito');
  }
};
//----------------------------------------------------------------
//----------------------------END GET USER-------------------------

//----------------------------------------------------------------
//----------------------------GRABAR USER-------------------------
const NewUser = async (req, res = response) => {
  console.log(req.body);
  const { nombre, apellido, dni, celular, correo, password } = req.body;

  try {
    const usuario = await pool.query(
      "SELECT * FROM user WHERE dni = ?",
      [dni],
      async (error, results) => {
        if (error) {
          console.log(error, "hola");
          return res.status(400).json(error);
        } else {
          // ----------------------------------------------
          // -------Verifica si existe el dni-------------
          if (results[0]) {
            return res.status(200).json({
              ok: false,
              msj: "Ya existe un Usuario Asociado a ese DNI",
            });
          } else if (!results[0]) {
            //Encriptar Password
            //console.log('hola');
            let salt = await bcryptjs.genSalt();
            let  passwordhash = await  bcryptjs.hash(password, salt);
             //console.log(passwordhash);
            //Query
       let myQuery = `INSERT INTO user( nombre, apellido, dni,celular,correo, password) 
             VALUES ( '${nombre}','${apellido}','${dni}','${celular}','${correo}','${passwordhash}')`;
             pool.query(myQuery, (error, results) => {
              if (error) {
                return res.status(400).json(error);
                console.log(error);
              }else{
                return res.status(200).json({
                  ok: true,
                  results
                });
              }
             
            });
          }
        }
      }
    );
  } catch (error) {}
};
//-----------------------------------------------------------
//----------------------------END NEW USER-------------------------

//-----------------------------------------------------------
//----------------------------EDIT USER-------------------------
const EditUser = async (req, res = response) => {

}
//-----------------------------------------------------------
//----------------------------END EDIT USER-------------------------

//-----------------------------------------------------------
//----------------------------DELETE USER-------------------------
const DeleteUser = async (req, res = response) => {
  //const {id} = req.params
  try {
    usuarios = await pool.query("SELECT * FROM users WHERE id =?", [id]);
  } catch (e) {
    res.status(404).json({ message: 'Somenthing goes wrong!' });
  }
  if (usuarios.length > 0) {
    usuarios = await pool.query("UPDATE user SET estado ='B' WHERE id =?", [id]);
    res.send.json({
      msj: 'Hola',
      usuarios
    });

  } else {
    res.status(404).json({ message: 'Not result' });
  }
}
//-----------------------------------------------------------
//----------------------------END DELETE USER-------------------------

//-----------------------------------------------------------
//----------------------------RECUPERAR CUENTA-------------------------
const changePaass = async (req, res = response) => {
  // const {id}= req.params;
  console.log('id');
  try {
    
  } catch (error) {
    
  }
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
//-----------------------------------------------------------
//----------------------------END RECUPERAR PASSWORD-------------------------

module.exports = {
  GetUser,
  NewUser,
  EditUser,
  DeleteUser,
  changePaass
  
};
