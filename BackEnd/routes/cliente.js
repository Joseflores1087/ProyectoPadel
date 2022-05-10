const { Router } = require('express');
const { check } = require('express-validator');
const { GetCliente, changePaass, NewCliente, EditCliente,deleteUser } = require ('../controllers/cliente-controllers');

//const { validarJWT } = require('../middlewares/validar-jwt');
// const { validar_campos } = require('../middlewares/validar-campos');
// const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

router.get('/GetCliente',GetCliente);


router.post('/NewCliente',[
    check('email', 'Correo no válido').isEmail(),
    check('nombre', 'Campo nombre requerido').not().isEmpty(),
    check('apellido', 'Campo apellido requerido').not().isEmpty(),
    check('password', 'Campo password requerido y debe tener mas de 8 caracteres').isLength({min: 8}),
    //check('email', 'Correo no válido').isEmail(),

], NewCliente);

router.post('/EditCliente/:id', EditCliente);

router.put('/changePaass', changePaass );

router.delete('/deleteUser/:id', deleteUser );

module.exports = router;