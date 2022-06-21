const { response, request } = require("express");
const pool = require("../database/database");
const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

//-------------------------------------------------------
//GET----------------------------------------------------
const GetCancha = async (req, res = response) => {
    console.log('hola cancha');
    try {
        cancha = await pool.query("SELECT * FROM cancha WHERE estado = 'A'")

    } catch (e) {
        res.status(404).json({ message: "Somenthing goes wrong!" });
    }
    if (cancha.length > 0) {
        return res.send(cancha);
    } else {
        return res.send(cancha);
        // res.status(404).json({
        //     message: "No existen Canchas"
        // });
    }
};

//-----------------------------------------------------------
//----------------------------GRABAR PERSONA-------------------------
const NewCancha = async (req, res = response) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(400).json(errors);
    // }
    console.log(req.body);
    const {
        nombre_cancha,
        direccion,
        telefono,
        codigo_postal,
        cantidad_canchas,
        horarios_disp,
        turno_fijo,
        logo,
    } = req.body;

    try {
        const canchas = await pool.query(
            "SELECT * FROM cancha WHERE nombre_cancha = ?",
            [nombre_cancha],
            async (error, results) => {
                if (error) {
                    return res.status(400).json(error);
                } else {
                    // ----------------------------------------------
                    // -------Verifica si existe el dni-------------
                    if (!results[0]) {
                        //Query
                        let myQuery = `INSERT INTO jugador( nombre_cancha, direccion,codigo_postal, cantidad_canchas,horarios_disp, turno_fijo,logo,telefono) 
                          VALUES ( '${nombre_cancha}','${direccion}','${codigo_postal}','${cantidad_canchas}','${horarios_disp}','${turno_fijo}','${logo}','${telefono}')`;
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
const EditCancha = async (req, res = response) => {
    console.log(req.params);
    const { id } = req.params;
    const {
        nombre_cancha,
        direccion,
        telefono,
        codigo_postal,
        cantidad_canchas,
        horarios_disp,
        turno_fijo,
        logo,
    } = req.body;
    try {
        const cancha = await pool.query(
            "SELECT * FROM cancha WHERE id = ?",
            [id],
            async (error, results) => {
                if (error) {
                    console.log(error, "hola");
                    return res.status(400).json(error);
                } else {
                    const newcancha = {
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
                    const canchas = await pool.query("UPDATE cancha SET ? WHERE id = ?", [
                        newcancha,
                        id,
                    ]);
                    return res.send(canchas);
                }
            }
        );
    } catch (error) {

    }

};

//-----------------------------------------------------------
//----------------------------DELETE PERSONA-------------------------
const DeleteCancha = async (req, res = response) => {
    const { id } = req.params;
    try {
        cancha = await pool.query("SELECT * FROM cancha WHERE id =?", [id]);
    } catch (e) {
        res.status(404).json({ message: "Somenthing goes wrong!" });
    }
    if (cancha.length > 0) {
        cancha = await pool.query("UPDATE cancha SET estado ='B' WHERE id =?", [
            id,
        ]);
        res.send(cancha);
    } else {
        res.status(404).json({ message: "Not result" });
    }
};

module.exports = {
    GetCancha,
    NewCancha,
    EditCancha,
    DeleteCancha,
};
