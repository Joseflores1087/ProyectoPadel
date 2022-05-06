const { Router } = require('express');
//const { check } = require('express-validator');
const { GetCliente, changePaass, NewCliente, editUser, hola,deleteUser, getById } = require ('../controllers/cliente-controllers');
//const { validarJWT } = require('../middlewares/validar-jwt');
// const { validar_campos } = require('../middlewares/validar-campos');
// const { validarJWT } = require('../middlewares/validar-jwt');


const router = Router();

router.get('/GetCliente',GetCliente);


router.post('/NewCliente', NewCliente);

router.put('/editUsers/:id', editUser);

router.put('/changePaass', changePaass );

router.delete('/deleteUser/:id', deleteUser );

module.exports = router;