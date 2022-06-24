const { Router } = require('express');
const { check } = require('express-validator');
const { GetCliente, ChangePaass, NewCliente, EditCliente,DeleteCliente } = require ('../controllers/jugador-controllers');

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

router.put('/ChangePaass/:id', ChangePaass );

router.delete('/DeleteCliente/:id', DeleteCliente );

module.exports = router;