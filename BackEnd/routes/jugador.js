const { Router } = require('express');
const { check } = require('express-validator');
const { GetJugador, ChangePaass, NewJugador, EditJugador,DeleteJugador } = require ('../controllers/jugador-controllers');

const router = Router();

router.get('/GetJugador',GetJugador);

router.post('/NewJugador',[
    check('email', 'Correo no válido').isEmail(),
    check('nombre', 'Campo nombre requerido').not().isEmpty(),
    check('apellido', 'Campo apellido requerido').not().isEmpty(),
    check('password', 'Campo password requerido y debe tener mas de 8 caracteres').isLength({min: 8}),
    //check('email', 'Correo no válido').isEmail(),
], NewJugador);

router.post('/EditJugador/:id', EditJugador);

router.put('/ChangePaass/:id', ChangePaass );

router.delete('/DeleteJugador/:id', DeleteJugador );

module.exports = router;