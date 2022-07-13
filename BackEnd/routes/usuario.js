const { Router } = require('express');
const { GetUser,GetUserById, NewUser, EditUser, DeleteUser,GetRol } = require ('../controllers/usuarios-controllers');


const router = Router ();


router.get('/GetUser',GetUser);

router.get('/GetUserById/:id',GetUserById );

router.post('/NewUser', NewUser);

router.post('/EditUser/:id', EditUser);

router.delete('/DeleteUser/:id', DeleteUser);

router.get('/GetRol',GetRol);

module.exports = router;