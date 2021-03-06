const { Router } = require('express');
const { check } = require('express-validator');
const { GetJugador, GetJugadorById, GetSeguidos, NewJugador, EditJugador, DeleteJugador,
    recuperarCuenta,
    corroborarCodigo,
    cambiarPassword, FollowJugador, UnfollowJugador} = require('../controllers/jugador-controllers');

const multer = require('multer')
const path = require("path");

const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/img/jugador'),
    filename: (req, File, cb) => {
        const ext = File.originalname.split('.').pop()
        const fileName = Date.now()
        cb(null, File.originalname);
        //    },
        //     filename: function (req, file, cb) {
        //       cb(null, file.fieldname + '-' + Date.now())
    },
});

const upload = multer({ storage: storage })

const router = Router();

router.get('/GetJugador/:id', GetJugador);

router.get('/GetJugadorById/:id', GetJugadorById);

router.get('/GetSeguidos/:id', GetSeguidos)

router.post('/NewJugador',upload.single('file')
    ,[
    //     check('email', 'Correo no válido').isEmail(),
    check('nombre', 'Campo nombre requerido').not().isEmpty(),
    check('apellido', 'Campo apellido requerido').not().isEmpty(),
    //     check('password', 'Campo password requerido y debe tener mas de 8 caracteres').isLength({min: 8}),
    //     //check('email', 'Correo no válido').isEmail(),
    ],
    NewJugador);

router.post('/EditJugador/:id', EditJugador);

//router.put('/ChangePaass/:id', ChangePaass);

router.delete('/DeleteJugador/:id', DeleteJugador);

router.post('/recuperarCuenta', recuperarCuenta);

router.post('/corroborarCodigo', corroborarCodigo);

router.post('/cambiarPassword', cambiarPassword);

router.post('/FollowJugador', FollowJugador)

router.post('/UnfollowJugador', UnfollowJugador)

module.exports = router;