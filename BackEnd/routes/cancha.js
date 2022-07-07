const { Router } = require('express');
const { GetCancha, GetCanchaById ,NewCancha, DeleteCancha } = require ('../controllers/cancha-controller');


const router = Router ();

router.get('/GetCancha',GetCancha);

router.post('/NewCancha', NewCancha);

router.post('/DeleteCancha/:id', DeleteCancha);

router.get('/GetCanchaById/:id', GetCanchaById)

module.exports = router;