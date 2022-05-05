const { Router } = require('express');
const { GetUser, NewUser } = require ('../controllers/usuarios-controllers');


const router = Router ();


router.get('/GetUser',GetUser);

router.post('/NewUser', NewUser);

module.exports = router;