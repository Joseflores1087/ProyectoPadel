const { Router } = require('express');
const { GetCancha, NewCancha, DeleteCancha } = require ('../controllers/cancha-controller');


const router = Router ();

router.get('/GetCancha',GetCancha);

router.post('/NewCancha', NewCancha);

router.post('/DeleteCancha/:id', DeleteCancha);

module.exports = router;