const { Router } = require('express');
//const { check } = require('express-validator');
const { ClienteGet, changePaass, newCliente, editUser, hola,deleteUser, getById } = require ('../controllers/cliente-controllers');
//const { validarJWT } = require('../middlewares/validar-jwt');
// const { validar_campos } = require('../middlewares/validar-campos');
// const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

router.get('/ClienteGet',ClienteGet);

router.get('/getById/:id',getById);

router.post('/newCliente', newCliente);

router.put('/editUsers/:id', editUser);

router.put('/changePaass', changePaass );

router.post('/hola/:id', hola );

router.delete('/deleteUser/:id', deleteUser );

module.exports = router;