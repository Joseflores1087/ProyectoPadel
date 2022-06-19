const { Router } = require('express');
//const { check } = require('express-validator');
const { login, getInicio } = require('../controllers/auth-controller');

const router = Router ();

router.post('/login', login);
// router.get('/getInicio', getInicio)

module.exports = router;