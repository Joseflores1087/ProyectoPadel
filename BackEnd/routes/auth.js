const { Router } = require('express');
//const { check } = require('express-validator');
const { loginJugador ,login, getInicio } = require('../controllers/auth-controller');

const router = Router ();

router.post('/loginJugador', loginJugador);

router.post('/login', login);
// router.get('/getInicio', getInicio)

module.exports = router;