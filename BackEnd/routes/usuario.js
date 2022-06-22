const { Router } = require('express');
const { GetUser, NewUser, EditUser, DeleteUser,GetRol } = require ('../controllers/usuarios-controllers');


const router = Router ();


router.get('/GetUser',GetUser);

router.post('/NewUser', NewUser);

router.post('/EditUser/:id', EditUser);

router.post('/DeleteUser/:id', DeleteUser);

router.get('/GetRol',GetRol);

module.exports = router;